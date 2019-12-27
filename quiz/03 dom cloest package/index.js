// closet
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!(el.document || el.ownerDocument.documentElement).contains(el)) {
      return null;
    }
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };
}
//第二题
if (!Element.prototype.closestAll) {
  Element.prototype.closestAll = function(s) {
    var el = this,
      closests = [];
    if (!(el.document || el.ownerDocument.documentElement).contains(el)) {
      return closests;
    }
    do {
      if (el.matches(s)) {
        closests.push(el);
      }
      el = el.parentElement;
    } while (el !== null);
    return closests;
  };
}
