//OPTIONS MODAL
const optionsBtn = document.getElementById('options-btn');
const optionsModal = document.getElementById('options-modal');
const closeOptions = document.getElementById('options-close');

const numBeatsChoice = document.querySelectorAll('.meter-top-radio'); 
const numBeats = Array.from(numBeatsChoice);
const meterTop = document.getElementById('meter-top');

const meterTypeChoice = document.querySelectorAll('.meter-bottom-radio');
const meterType = Array.from(meterTypeChoice);
const meterBottom = document.getElementById('meter-bottom');

const noteValueChoices = document.querySelectorAll('.note-value-checkbox');
const noteValues = Array.from(noteValueChoices);


  //Open/Close Modal
optionsBtn.onclick = function() {
  optionsModal.style.display = "block";
}

closeOptions.onclick = function() {
 optionsModal.style.display = "none";
}


  //Select Beats per measure (meter top)
numBeats.forEach(el => {
  el.addEventListener('click', event => {
    console.log('meter top was selected');
    selectNumBeats();
  })
});

function selectNumBeats(e) {
  if (document.getElementById("meterTop2").checked === true) {
    meterTop.innerHTML = "2";
  } else if (document.getElementById("meterTop3").checked === true) {
    meterTop.innerHTML = "3";
  } else if (document.getElementById("meterTop4").checked === true) {
    meterTop.innerHTML = "4";
  } else if (document.getElementById("meterTop6").checked === true) {
    meterTop.innerHTML = "6";
  }
};

  //Select type of meter (meter bottom)
meterType.forEach(el => {
  el.addEventListener('click', event => {
    selectMeterType();
  })
});

function selectMeterType(e) {
  if (document.getElementById('meterBottom2').checked === true) {
    meterBottom.innerHTML = '2';
  } else if (document.getElementById('meterBottom4').checked === true) {
    meterBottom.innerHTML = '4';
  } else if (document.getElementById('meterBottom8').checked === true) {
    meterBottom.innerHTML = '8';
  }
}

  //Select Number of Measures  //future - add template strings based on selection


  //Select Note Value Options  //future - add template strings based on selection
noteValues.forEach(el => {
  el.addEventListener('click', event => {
    console.log('rhythm checked');
    selectRhythmValues();
  })
})

  //Items in the Choices Container:
const wholeNote = document.getElementById('choice-whole');
const halfNote = document.getElementById('choice-half');
const quarterNote = document.getElementById('choice-quarter');
const twoEighths = document.getElementById('choice-2eighths');

function selectRhythmValues(e) {
    document.getElementById('rhythmValueWhole').checked ? wholeNote.style.display = "block" : wholeNote.style.display = "none";
    document.getElementById('rhythmValuehalf').checked ? halfNote.style.display = "block" : halfNote.style.display = "none";
    document.getElementById('rhythmValuequarter').checked ? quarterNote.style.display = "block" : quarterNote.style.display = "none";
    document.getElementById('rhythmValue2Eights').checked ? twoEighths.style.display = "block" : twoEighths.style.display = "none";
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

/*for remembering:
if (el) el.parentElement.removeChild(el);*/


//Trying to specify chosen beat by id
/*function addChoice(e) {
    console.log('beat choice made');
    beatLocation = e.target.getElementById(id);
    beatLocation.appendChild(copyChosenRhythm);     
}*/


