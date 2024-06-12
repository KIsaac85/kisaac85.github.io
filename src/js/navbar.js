
const el = document.getElementsByTagName("ul")[0];
const ele = document.getElementsByClassName("navbar-items")[0];
const elIcon = document.getElementsByClassName("navbar-icon")[0];

/*
function gotclicked() {
    
    el.style.flexDirection="column";
    el.style.width="50px"
    
    ele.style.display="flex";
    ele.style.flexDirection="row-reverse"
    

    
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        ele.classList.add("hello");
        console.log("je");
    } else {
        ele.classList.remove("hello")
        console.log("hj");
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1200px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener ("resize", function() {
    myFunction(x);
  });