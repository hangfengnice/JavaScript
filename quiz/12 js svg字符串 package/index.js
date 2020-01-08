var str =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z" fill="#0067E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6a1 1 0 0 1 1-1h9l5 5v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6z" fill="#FEAEA5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5l5 5h-4a1 1 0 0 1-1-1V5z" fill="#0067E6"/></svg>';

// 1.
var str1 = str.replace(/fill="([^"]+)"/gi, function(match, p) {
  return p === "none" ? match : "";
});

// or 
var str1 = str.replace(/fill="(?!none")[^"]+"/g,"");

// 2. 
var str2 = btoa(encodeURI(str1))

// 3.
var str3 = str1.replace(/[%#{}<>]/g, encodeURI);


