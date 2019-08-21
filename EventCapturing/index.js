document.querySelector("#grandparent").addEventListener("click",()=>{
  console.log("Grandparent Clicked!");
  //e.stopPropagation();
},true);

document.querySelector("#parent").addEventListener("click",()=>{
  console.log("parent Clicked!");
  //e.stopPropagation();
},true);

document.querySelector("#child").addEventListener("click",()=>{
  console.log("child Clicked!");
  //e.stopPropagation();
},true);