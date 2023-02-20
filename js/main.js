'use strict';

//Inserimento dati utente 
const firstName = prompt('Inserirsci il tuo nome');
const lastName = prompt('Inseririsci il tuo cognome');
const favoriteColor = prompt('Inserisci il tuo colore preferito');

//Generazione password utilizando i dati inseriti dall'utente 
const Password = `${firstName}${lastName}${favoriteColor}89`;

//Inerisco i dati per la visualizzazione degli input
document.getElementById('FirstName').innerHTML = firstName;
document.getElementById('LastName').innerHTML = lastName;
document.getElementById('Favoritecolor').innerHTML = favoriteColor;
document.getElementById('Password').innerHTML = Password;

//Password visualizata nella console
console.log(Password);