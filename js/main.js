
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

function calculate()
{


var P=document.querySelector("#loan-amount");
var R=document.querySelector("#interest-rate");
var N=document.querySelector("#tenure");

var interest=P * R * (1+R)**N / [(1+R)**N-1];
document.querySelector("#interest").innerHTML=interest;
}



function calculateEMI() {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  // Check if all fields are filled
  if (principal === "" || rate === "" || tenure === "") {
    alert("Please fill all fields");
    return;
  }

  // Convert rate to monthly interest rate
  let monthlyRate = (rate / 12) / 100;

  // Convert tenure to number of months
  

  // Calculate EMI using formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);

  // Round off the result to two decimal places
  emi = emi.toFixed(2);

  // Display the result on the webpage
  let total = document.getElementById("totalinterest");
  total.innerHTML = "₹ "+(emi*tenure-principal).toLocaleString('en-IN');
  let pay = document.getElementById("payment");
  
  inter= "₹ "+(emi*tenure).toLocaleString('en-IN');
  
  pay.innerHTML = inter;
  let per = document.getElementById("per");
  per.innerHTML = "₹ "+(emi);

}


const calculateButton = document.querySelector("#calc");
calculateButton.addEventListener("click", calculateEMI);



//slider
const range = document.querySelector('input[type="range"]');
    const input = document.querySelector('input[type="number"]');

    input.addEventListener('input', () => {
        range.value = input.value;
    });

    range.addEventListener('input', () => {
        input.value = range.value;
    });

    const range1 = document.querySelector('#rate1');
    const input1 = document.querySelector('#rate');

    input1.addEventListener('input', () => {
        range1.value = input1.value;
    });

    range1.addEventListener('input', () => {
        input1.value = range1.value;
    });


  
//typewriter

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

