//Chiedo all'utente il suo nome
const userName = prompt('Qual è il tuo nome?','Luca');
console.log(userName);

//Chiedo all'utente il suo cognome
const userSurname = prompt('Qual è il tuo cognome?','Polzone');
console.log(userSurname);

//Chiedo all'utente il suo colore preferito
const userColor = prompt('Qual è il tuo colore preferito?','Arancione');
console.log(userColor);

//Genero la password concatenando tutti i dati
const userPassword = userName + userSurname + userColor + '23';
console.log(userPassword);

//Stampo a schermo la password generata
document.getElementById('password').innerText = `La tua password è ${userPassword}`;
