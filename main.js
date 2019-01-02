 /* copied from jilaada.github.io */
// Define the choices 
//const helloChoices = ["Hi", "Kia ora", "你好", "안녕", "こんにちは", "สวัสดี", "Bonjour", "Hallo", "Ciao", "Talofa"]

//const helloChoices = ["sleeping","on holiday", "in thailand", "working on my website", "being lazy", "on spotify", "moving to tokyo"]

var helloChoices;
helloChoices = ["in thailand","alive","on holiday", "developing my website", "relaxing", "listening to spotify", "eating", "not playing games"]


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

