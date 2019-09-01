var openRequest = window.indexedDB.open("hangfeng", 1);
var db;
openRequest.onsuccess = function(e) {
  console.log("Success!");
  db = openRequest.result;
  // console.log(db.name)
  db.createObjectStore("items");
  
};
var request = window.indexedDB.open("hangfeng", 2);

request.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    console.log("error");
  };

  var objectStore = db.createObjectStore("items");

  // ...
};
// console.log(window.indexedDB.deleteDatabase("hangfeng"));

// let DBDeleteRequest = window.indexedDB.deleteDatabase("hangfeng");

// DBDeleteRequest.onerror = function(event) {
//   console.log("Error");
// };

// DBDeleteRequest.onsuccess = function(event) {
//   console.log("success delete");
// };

// console.log(window.indexedDB.cmp(1, 2));