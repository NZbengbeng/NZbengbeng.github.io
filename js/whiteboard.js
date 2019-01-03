 /* copied from jilaada.github.io */
// Define the choices 
//const helloChoices = ["Hi", "Kia ora", "你好", "안녕", "こんにちは", "สวัสดี", "Bonjour", "Hallo", "Ciao", "Talofa"]

//const helloChoices = ["sleeping","on holiday", "in thailand", "working on my website", "being lazy", "on spotify", "moving to tokyo"]

var helloChoices;
helloChoices = ["playing around", "cool things", "random stuff", "scribbling"]


let counter = 0

const cycleHello = () => {
  //random cycle
  //return (Math.floor(Math.random() * helloChoices.length))

  //not random cycle 
  if (counter < helloChoices.length -1) {
    counter++
  } else {
    counter = 0
  }
  return counter
}

const generatedEl = document.querySelector('.generated')
generatedEl.addEventListener('animationend', () => {
  makeContent()
  generatedEl.classList.remove('run')
  void generatedEl.offsetWidth
  generatedEl.classList.add('run')
})

const makeContent = () => {
  generatedEl.innerText = helloChoices[cycleHello()] + "."
  document.getElementById("animate").style.color = getRandomColor();
  document.getElementById("myBrand").style.color = getRandomColor();
} 

function getRandomColor() {
 var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openAboutSection() {
    document.getElementById("content").innerHTML = "whatever";
  }
  function myDemo() {
  document.getElementById("demo").innerHTML = "lol";
  }


    /*countdown timer*/
// Set the date we're counting down to

//Countdown till winter olympics 2020
var countDownDate = new Date("July 24, 2020 11:00:00 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

