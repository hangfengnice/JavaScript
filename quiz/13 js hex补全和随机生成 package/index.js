// 正则
function colorPad(color) {
  var reg = /^#?([0-9a-f]{1,3}|[0-9a-f]{6})$/i;
  if (reg.test(color)) {
    return color.replace(reg, function(all, $1) {
      var hex = "";
      if ($1.length === 3) {
        hex = $1
          .split("")
          .map(function(el) {
            return el.repeat(2);
          })
          .join("");
      } else {
        hex = $1.repeat(6 / $1.length);
      }
      return "#" + hex.toLowerCase();
    });
  } else {
    return "#000000";
  }
}
function colorPad(str) {
  let reg = /[^#a-f0-9]/gi;
  str = str.toLowerCase();
  if (reg.test(str)) return "#000000";

  if (str.length == 1 && !/#/.test(str)) {
    return "#" + str.repeat(6);
  }
  if (str.length == 2 && /#/.test(str)) {
    return "#" + str.substr(1).repeat(6);
  }
  if (str.length == 2 && !/#/.test(str)) {
    return "#" + str.repeat(3);
  }

  if (str.length == 3) {
    return "#" + str.substr(1).repeat(3);
  }

  if (str.length == 4) {
    var string = "";
    str
      .substr(1)
      .split("")
      .forEach(item => {
        string += item.repeat(2);
      });
    return "#" + string;
  }
  if (str.length == 6) {
    return "#" + str;
  }
  if (str.length == 7) {
    return str;
  }
  return "#000000";
}
colorPad("#");

function randomHex() {
  return "#" + String(Math.random()).substr(2, 6);
}

function colorRange(hex1, hex2) {
  hex1 = colorPad(hex1);
  hex2 = colorPad(hex2);

  let hex1Number = parseInt(hex1.substr(1), 16);
  let hex2Number = parseInt(hex2.substr(1), 16);

  return (
    "#" +
    Math.floor(Math.random() * (hex2Number - hex1Number + 1) + hex1Number)
      .toString(16)
      .padStart(6, "0")
  );
}

colorRange("#fc0", "#ffcc03");

console.log(colorRange("#fc0", "#ffcc03"));
