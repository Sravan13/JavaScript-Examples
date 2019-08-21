document.querySelector("#grandparent").addEventListener("click",()=>{
  console.log("Grandparent Clicked!");
  //e.stopPropagation();
},false);

document.querySelector("#parent").addEventListener("click",()=>{
  console.log("parent Clicked!");
  //e.stopPropagation();
},false);

document.querySelector("#child").addEventListener("click",()=>{
  console.log("child Clicked!");
  //e.stopPropagation();
},false);