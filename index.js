/**
 * Remove empty directories from the tree.
 */
module.exports = function() {
  return function(tree) {
    tree.all(function(item){
      if (item.isDirectory() && !item.hasChildren()) {
        item.remove();
      }
    });
  };
};
