var juni = require("juni");

/**
 * Remove empty directories from the tree.
 */
module.exports = function() {
  return function(tree) {
    tree.walk(juni.walk.post(function(item){
      if (item.isDirectory() && !item.hasChildren()) {
        item.remove();
      }
    }));
  };
};
