let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
  var forms = document.getElementsByTagName('form');

  for (var i = 0; i < forms.length; i++) {

    forms[i].addEventListener('submit', function(event) {

      event.preventDefault();
      addToCart();
      
    }); 
  }

});
function addToCart() {
  if (counter < 99) {
    counter++;

  }
  let count = document.getElementById("counter");
  count.innerHTML = counter;

  document.getElementById("shown").classList.add('hidden');
  document.getElementById("shown").classList.remove('shown');

  document.getElementById("hidden").classList.add('shown');
  document.getElementById("hidden").classList.remove('hidden');

}

function doPopUp() {
  let a = document.getElementById("popup");
    
  if (a.style.right == "0px") {
    a.style.right = "-100%";
  } else {
    a.style.right = "0px";
  }
}
