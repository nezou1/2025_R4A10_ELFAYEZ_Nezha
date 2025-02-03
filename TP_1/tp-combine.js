// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    return getEmployees().filter(employee => employee.name.endsWith("e"));
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    return getEmployees().find(employee => parseInt(employee.age) < 30);
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    return getEmployees().findIndex(employee => employee.name === "Jeremy");
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    return getEmployees().slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    const employees = getEmployees().slice();
    employees.push({ name: "Kasimu", age: "38" });
    return employees;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    return getEmployees().length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    return getEmployees().map(employee => 
      employee.name === "Theo" ? { ...employee, name: "Thea" } : employee
    );
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    return getEmployees().filter(employee => employee.name.includes("e"));
  },
};