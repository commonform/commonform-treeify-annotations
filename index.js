var get = require('keyarray-get')
var setp = require('setp')

module.exports = function (annotations, tree) {
  if (tree === undefined) {
    tree = {}
  }
  annotations.forEach(function (annotation) {
    var path = annotation.path.concat('annotations')
    var list = get(tree, path)
    if (list === undefined) {
      list = []
      setp(tree, path, list)
    }
    list.push(annotation)
  })
  return tree
}
