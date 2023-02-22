Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
  
  if (other.length !== this.length) return false;
    
  for (let i = 0; i < other.length; i++) {
    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) return false;
    } else if (Array.isArray(this[i]) || Array.isArray(other[i])){
      return false;
    }
  }
  
  return true;
};