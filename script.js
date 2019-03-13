//OPTIONS MODAL
const optionsBtn = document.getElementById('options-btn');
const optionsModal = document.getElementById('options-modal');
const closeOptions = document.getElementById('options-close');

//Meter Modal
optionsBtn.onclick = function() {
  optionsModal.style.display = "block";
}

closeOptions.onclick = function() {
 optionsModal.style.display = "none";
}




// CHOOSE RHYTHM AND PUT IN WORK AREA
const choices = document.querySelectorAll('.choice');
const beat = document.querySelectorAll('.beat-line');

const chosen = Array.from(choices);
const beats = Array.from(beat);


//Choose rhythm 

chosen.forEach(el => {
  el.addEventListener('click', event => {
    console.log('a choice was clicked')
    chosenRhythm = event.target.cloneNode(false);
    })
});


//add rhythm to measure (work-area) 

/*beats.forEach(el => {
 el.addEventListener('click', event => {
    console.log('a beat was clicked');
    beatLocation = event.target.parentNode;
    el.appendChild(copyTarget);
  })  
});*/

//same functionality - looks better(?)
function addChoice(e) {
    console.log('beat choice made');
    beatLocation = e.target;  
    beatLocationChild = beatLocation.childElement;
    beatLocationParent = beatLocation.parentElement; 

    if (chosenRhythm.id === "eraser") {
      beatLocation = e.target;
      beatLocation.beatLocationParent.removeChild(beatLocation); 
    }

    beatLocation.appendChild(chosenRhythm);    
}

beats.forEach(el => {   
    //el.onclick = addChoice; //same results      
    el.addEventListener('click', addChoice);
});




//Trying to specify chosen beat by id
/*function addChoice(e) {
    console.log('beat choice made');
    beatLocation = e.target.getElementById(id);
    beatLocation.appendChild(copyChosenRhythm);     
}*/


