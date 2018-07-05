

module.exports = function (babel) {
    var t = babel.types
   
    var asyncFunctionVisitor = {
      FunctionExpression: function (path) {
         path.node.async = true;
        },
        FunctionDeclaration: function(path) {
            path.node.async = true;
        }
    }
  
    return {
      visitor: {
        Function: function (path) {            
            path.traverse(asyncFunctionVisitor)
        }
      }
    }
  }
  