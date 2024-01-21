// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// SetInterval toutes les 1 secondes

// Créer un événement à la validation du form pour lancer le compte à rebours

// const form = document.querySelector('form');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
 

//     totalSeconds = choice.value * 60;

//     console.log("total Secondes : " + totalSeconds);

//     let minutes = Math.floor(totalSeconds / 60);

//     console.log("minutes : " + minutes);

//     let seconds = totalSeconds % 60;

//     console.log("secondes : " + seconds);

//     setInterval(() => {

//         if (seconds > 0) {
//             countdownDisplay.innerHTML = `<div>${choice.value}: ${seconds}</div >`;
//             seconds--;
//         } else {
//             minutes--;
//             seconds = 59;
//             countdownDisplay.innerHTML = `<div>${minutes}</div >`;
//         }

//     }, 1000);


    
// });

// setInterval(countdownMaker, 1000);


//--------------------- Correction --------------------


let totalSeconds;
let interval;

function countDown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds

    countdownDisplay.textContent = `${minutes} : ${sec}`;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else { 
        countdownDisplay.textContent = "C'est terminé";
        clearInterval(interval);
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isNaN(choice.value)) {
        alert("Entrez un chiffre ou un nombre");
    } else {
        totalSeconds = choice.value * 60;
        choice.value = "";
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    }
});
