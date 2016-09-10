```javascript
var treeify = require('commonform-treeify-annotations')
var assert = require('assert')

var shallow = {
  message: 'The heading "Payment" is referenced, but not used.',
  path: ['content', 0],
  source: "commonform-lint",
  url: null
}

var deep = {
  message: 'The heading "Indemnity" is referenced, but not used.',
  path: ['content', 0, 'form', 'content', 7],
  source: "commonform-lint",
  url: null
}

assert.deepEqual(
  treeify([shallow, deep]),
  {
    content: {
      0: {
        annotations: [shallow],
        form: {
          content: {
            7: {
              annotations: [deep]
            }
          }
        }
      }
    }
  }
)
```
