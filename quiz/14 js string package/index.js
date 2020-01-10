function toCamelCase(str) {
  return str.replace(/\-(\w)/g, function(match, $1) {
    console.log(typeof $1);
    return $1.toUpperCase();
  });
}

function toDashJoin(str) {
  return str.replace(/[A-Z]/g, function(match) {
    return "-" + match.toLowerCase();
  });
}

// 2. other
// function toDashJoin(str) {
//   return str.replace(/[A-Z]/g, '-$&').toLowerCase();  // $&：表示匹配到的内容
// }

function toCapitalize(str) {
  return str.replace(/(\s+|^)(\w)/g, function(match, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

function toBetterUrl(str) {
  return str
    .replace(/\s+/g, function(match) {
      return "-";
    })
    .replace(/[A-Z]/g, function(match) {
      return match.toLowerCase();
    });
}
// 4. other
// function toBetterUrl(str) {
//   return str.split(/\s+/).map(s => s.toLowerCase()).join('-');
// }

console.log(toCamelCase("abc-deg-ghi"));
