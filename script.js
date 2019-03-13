//CHOICES AT TOP BAR
const meterBtn = document.getElementById('meter-btn');
const meterModal = document.getElementById('meter-modal');
const closeMeter = document.getElementById('meter-close');

const beatsBtn = document.getElementById('beats-btn');
const beatsModal = document.getElementById('num-beats-modal');
const closeBeats = document.getElementById('beats-close');

const valuesBtn = document.getElementById('note-values-btn');
const valuesModal = document.getElementById('note-values-modal');
const closeValues = document.getElementById('values-close');

//Meter Modal
meterBtn.onclick = function() {
  meterModal.style.display = "block";
}

closeMeter.onclick = function() {
  meterModal.style.display = "none";
}

//Beats per Measure Modal
beatsBtn.onclick = function() {
  beatsModal.style.display = "block";
}

closeBeats.onclick = function() {
  beatsModal.style.display = "none";
}

//Note Values Modal
valuesBtn.onclick = function() {
  valuesModal.style.display = "block";
}

closeValues.onclick = function() {
  valuesModal.style.display = "none";
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


