// Fonction d'évaluation avec des continuations cont la continuation
function evalExpr(expr, env, continuation) {
  if (typeof expr === 'number') {
    return continuation(expr);
  } else if (typeof expr === 'string') {
    return continuation(env[expr]);
  } else if (Array.isArray(expr)) {
    return evaluateOperation(expr, env, continuation)
  }
}

//Evaluation de l'operation
function evaluateOperation(expr, env, continuation) {
    if (expr[0] === '+') {
        return evalExpr(expr[1], env, function(v1) {
        return evalExpr(expr[2], env, function(v2) {
        return continuation(v1 + v2);
        });
        });
    }
}

// Environnement contenant des variables
const env = { x: 10, y: 20 };

// Expression à évaluer : équivalente à "x + y"
const expr = ['+', 'x', 'y'];

// On passe une continuation qui affiche le résultat final
evalExpr(expr, env, function(result) {
  console.log("Résultat :", result);
});
