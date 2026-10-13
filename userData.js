// Déclaration des users
const users = [
    { name: "Batman", age: 35, email: "batman@yahoo.com" },
    { name: "Spiderman", age: 17, email: "spiderman@gmail.com" },
    { name: "Bane", age: 30, email: "bane@outlook.com" }
];

// Renvoie le tableau des users sous forme Nom: X, Age: Y, Email: Z
// commiting ...
function formatUsers(users) {
    return users.map(user =>
        `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}`
    );
}

// Fonction qui renvoie que les majeurs
function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

// Fonction qui renvoie l'user dans la liste des users en le trouvant par son email.
function findUserByEmail(users, email) {
    const user = users.find(user => user.email === email);

    if (user === undefined) {
        return null;
    } else {
        return user;
    }
}

// Le module.export dit ce que notre fichier partage avec les autres fichiers comme données.
// Donc en l'occurence 2 objets et 2 méthodes ici.
module.exports = { users, formatUsers, getAdults, findUserByEmail };