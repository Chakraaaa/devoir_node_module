// Avec require on récupere le module.export de userData et
// entre les accolates c'est la qu'on récupère les éléments qu'on veut de ce module.export
// C'est ca la destructuration
const { users, formatUsers, getAdults, findUserByEmail } = require("./userData");
// On recupere les users majeurs
const adults = getAdults(users);
// __filename c'est le chemin complet de app.js
console.log("Fichier actuel :", __filename);
//__dirname c'est le chemin complet du dossier qui contient app.js
console.log("Dossier actuel :", __dirname);
// Affichage des users en passant par formatUsers
console.log("Liste des utilisateurs :", formatUsers(users));
// Affichage des users majeurs en passant par formatUsers
console.log("Liste formatée des majeurs :", formatUsers(adults));





