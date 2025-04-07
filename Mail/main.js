// RACCOLTA DATI
const guestList = [
  "marta@gmail.com",
  "chiara@gmail.com",
  "giacomo@gmail.com",
  "luca@gmail.com",
  "alice@gmail.com",
  "davide@gmail.com",
  "luisa@gmail.com",
];
const guestEmail = prompt(
  "Scrivi la tua email per entrare alla festa",
  "giacomo@gmail.com"
);
let isMailFound = false;
// SVOLGIMENTO
for (let i = 0; i < guestList.length; i++) {
  const currentEmail = guestList[i];

  if (currentEmail === guestEmail) {
    isMailFound = true;
  }
}
if (isMailFound) {
  alert("Puoi entrare alla festa");
  console.log(guestEmail, "è nella lista");
} else {
  alert("Non puoi entrare alla festa");
  console.log(guestEmail, "non è nella lista");
}
// OUTPUT
