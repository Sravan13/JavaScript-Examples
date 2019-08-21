document.querySelector("#category").addEventListener("click",(e)=>{

  console.log(e.target);
  console.log(e.target.id);

},false);

document.querySelector("#form").addEventListener("keyup",(e)=>{

  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
  
},false);