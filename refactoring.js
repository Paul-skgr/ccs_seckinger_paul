// Fonction d'évaluation avec des continuations
function evalExpr(expr, env, k) {
  if (typeof expr === 'number') {
    // Si l'expression est un nombre, on l'envoie directement à la continuation
    return k(expr);
  } else if (typeof expr === 'string') {
    // Si l'expression est une variable, on récupère sa valeur dans l'environnement
    return k(env[expr]);
  } else if (Array.isArray(expr)) {
    // Si c'est une addition, on suppose que l'expression est du type ['+', e1, e2]
    if (expr[0] === '+') {
      // Évaluation de e1
      return evalExpr(expr[1], env, function(v1) {
        // Évaluation de e2
        return evalExpr(expr[2], env, function(v2) {
          // On applique la continuation à la somme de v1 et v2
          return k(v1 + v2);
        });
      });
    }
  }
}

// Exemple d'utilisation

// Environnement contenant des variables
const env = { x: 10, y: 20 };

// Expression à évaluer : équivalente à "x + y"
const expr = ['+', 'x', 'y'];

// On passe une continuation qui affiche le résultat final
evalExpr(expr, env, function(result) {
  console.log("Résultat :", result);
});
