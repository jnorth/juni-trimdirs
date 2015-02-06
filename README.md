# juni-trimdirs

A Juni plugin that removes any empty directories from the tree.

## Usage

```javascript
var juni = require("juni");
var trimdirs = require("juni-trimdirs");

new juni.Tree("/my/path")
  .pipe(populate())
  .pipe(trimdirs());
```
