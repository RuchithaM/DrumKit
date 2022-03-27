
//Detect button press
for(let x=0;x<document.querySelectorAll("button.drum").length;x++) {
  classDrum = document.querySelectorAll("button")[x]  //all the elements that has class drum and loops through all the all the eleme
  classDrum.addEventListener("click",function(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });  //added event Listener to all elements in loop
}

//Detect key press
document.addEventListener('keydown', function(e){
  playSound(e.key);
  buttonAnimation(e.key);
});



function playSound(key){

  switch(key){
    case('w'): audioSource=new Audio("sounds/crash.mp3");
               audioSource.play();
    break;
    case('a'): audioSource=new Audio("sounds/kick.mp3");
               audioSource.play();
    break;
    case('s'): audioSource= new Audio("sounds/snare.mp3");
               audioSource.play();
    break;
    case('d'): audioSource=new Audio("sounds/tom-1.mp3");
               audioSource.play();
    break;
    case('j'): audioSource=new Audio("sounds/tom-2.mp3");
               audioSource.play();
    break;
    case('k'): audioSource=new Audio("sounds/tom-3.mp3");
               audioSource.play();
    break;
    case('l'): audioSource= new Audio("sounds/tom-4.mp3");
               audioSource.play();
    break;
    default: console.log(key);
  }

}


function buttonAnimation(currentPress){
  var currentKey=document.querySelector("."+currentPress);
  currentKey.classList.add("pressed");
  setTimeout(function(){currentKey.classList.remove("pressed");},100);
}
