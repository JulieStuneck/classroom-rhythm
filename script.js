//hover - pointer on notes
//click on note at bottom and add to measure
//functionality for top menu

//CHOICES AT TOP BAR
  //started - commented out until I come back to it//
/*const numBeats = document.querySelectorAll('.num-beats');
const meterTop = document.getElementById('meter-top');

numBeats.forEach(el => {
  el.addEventListener('click', event => {
    console.log('beat choice is ' + event.value);
  })
});*/

/*if (numBeats.value = 2) 
*/



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
      //beatLocation = e.target;
      beatLocationChild.beatLocation.removeChild(beatLocationChild[0]); 
    }

    beatLocation.appendChild(chosenRhythm);    
}

/*function removeChoice(e) {
      if (chosenRhythm.id === "eraser") {
      beatLocationChild.beatLocation.removeChild(beatLocationChild[0]); 
    }
}*/

/*removeChoice();*/

beats.forEach(el => {   
    el.onclick = addChoice; //same results  
    
    //el.addEventListener('click', addChoice);
});




//Trying to specify chosen beat by id
/*function addChoice(e) {
    console.log('beat choice made');
    beatLocation = e.target.getElementById(id);
    beatLocation.appendChild(copyChosenRhythm);     
}*/




//This works, but is not what I want it to do:
/*beats.forEach(el => {
 el.addEventListener('click', event => {
    console.log('a beat was clicked');
    beatLocation = event.target.parentNode;
    beatLocation.appendChild(copyTarget);
  })  
});*/






//erase a rhythm

/*if (copyTarget === '.eraser') {
        event.target.beatLocation.removeChild('.choice');
      }
*/

//check for children:
 //if (element.childNodes.length > 0)