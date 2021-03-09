var html =
  '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';

const ncname = "[a-zA-Z_][\\w\\-\\.]*";
const singleAttrIdentifier = /([^\s"'<>/=]+)/;
const singleAttrAssign = /(?:=)/;
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /'([^']*)'+/.source,
  /([^\s"'=<>`]+)/.source,
];
const attribute = new RegExp(
  "^\\s*" +
    singleAttrIdentifier.source +
    "(?:\\s*(" +
    singleAttrAssign.source +
    ")" +
    "\\s*(?:" +
    singleAttrValues.join("|") +
    "))?"
);

const qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
const startTagOpen = new RegExp("^<" + qnameCapture);
const startTagClose = /^\s*(\/?)>/;

const endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");

const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;

const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;

let index = 0;

const stack = [];
let currentParent, root;

function advance(n) {
  index += n;
  html = html.substring(n);
}

function parseHtml() {
  debugger;
  while (html) {
    let textEnd = html.indexOf("<");

    if (textEnd == 0) {
      if (html.match(endTag)) {
        const endTagMatch = html.match(endTag);
        if (endTagMatch) {
          advance(endTagMatch[0].length);

          parseStartTag(endTagMatch[1]);
          continue;
        }
      }

      if (html.match(startTagOpen)) {
        const startTagMatch = parseStartTag();
        const element = {
          type: 1,
          tag: startTagMatch.tagName,
          lowerCasedTag: startTagMatch.tagName.toLowerCase(),
          attrsList: startTagMatch.attrs,
          attrsMap: makeAttrsMap(startTagMatch.attrs),
          parent: currentParent,
          children: [],
        };
        if (!root) {
          root = element;
        }

        if (currentParent) {
          currentParent.children.push(element);
        }
        stack.push(element);
        currentParent = element;
        continue;
      }
    } else {
      text = html.substring(0, textEnd);
      advance(textEnd);
      let expression;
      if ((expression = parseText(text))) {
        currentParent.children.push({
          type: 2,
          text,
          expression,
        });
      } else {
        currentParent.children.push({
          type: 3,
          text,
        });
      }
      continue;
    }
  }
}

function parseStartTag() {
  const start = html.match(startTagOpen);

  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index,
    };
    advance(start[0].length);

    let end, attr;

    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(attribute))
    ) {
      advance(attr[0].length);
      match.attrs.push({
        name: attr[1],
        value: attr[3],
      });
    }

    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
      match.end = index;
      return match;
    }
  }
}
function parseEndTag(tagName) {
  let pos;
  for (pos = stack.length - 1; pos >= 0; pos--) {
    if (stack[pos].lowerCasedTag === tagName.toLowerCase()) {
      break;
    }
  }
  if (pos >= 0) {
    stack.length = pos;
    currentParent = stack[pos];
  }
}
function parseText(text) {
  if (!defaultTagRE.test(text)) return

  const tokens = []
  let lastIndex = defaultTagRE.lastIndex = 0
  let match, index

  while((match = defaultTagRE.exec(text))) {
    index = match.index
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)))
    }

    const exp = match[1].trim()
    tokens.push(`_s(${exp})`)
    lastIndex = index + match[0].length
  }
  
  if (lastIndex < test.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)))
  }
  return tokens.join('+')
}
function makeAttrsMap(attrs) {
  const map = {};
  for (let i = 0; i < attrs.length; i++) {
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}
parseHtml();
