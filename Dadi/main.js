// RACCOLTA DATI
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;
// SVOLGIMENTO
console.log("pc number:", pcNumber);
console.log("user number:", userNumber);

if (userNumber > pcNumber) {
  console.log("Ha vinto user");
  alert("Ha vinto user");
} else if (userNumber < pcNumber) {
  console.log("Ha vinto pc");
  alert("Ha vinto pc");
} else {
  console.log("Pareggio");
  alert("Pareggio");
}
// OUTPUT
