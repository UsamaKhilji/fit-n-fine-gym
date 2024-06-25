
let trains = document.getElementById("trains");
let connects= document.getElementById("connects");
let members= document.getElementById("members");
let programs = document.getElementById("programs");

trains.addEventListener("click", function(){
    trains.style.color="green";
    members.style.color="white";
    connects.style.color="white";
    programs.style.color="white";
})

members.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="red";
    connects.style.color="white";
    programs.style.color="white";
})
connects.addEventListener("click",function(){
    connects.style.color="blue";
    trains.style.color="white";
    members.style.color="white";
    programs.style.color="white";
})
programs.addEventListener("click",function(){
    connects.style.color="white";
    trains.style.color="white";
    members.style.color="white";
    programs.style.color="rgb(132, 149, 186)";
})

  let mainbtn = document.getElementById("mainbtn");
  mainbtn.addEventListener("click", function(){
    document.querySelector(".joins").style.display="block";
  })

  let joins = document.getElementById("joins");

  joins.addEventListener("click", function(){
  let names = document.getElementById("names");
  let numbers = document.getElementById("numbers");


  if(names.value == "" && numbers.value == ""){
    alert("Please Enter Name and Number");
  } else {
    alert("Thanks For Joining Us");
    document.querySelector(".joins").style.display="none";
  }
 
  })

  let slide = document.querySelectorAll(".slide");
  let pre = document.getElementById("pre");
  let next = document.getElementById("next");

  console.log(slide);

  let count = 0;

  next.addEventListener("click", function(){
    count++;
    if(count == slide.length-2){
      count=0;
    }
    myfun();
  })
  pre.addEventListener("click", function(){
    count--;
    if(count == -1){
      count=slide.length-3
    }
    myfun();
  })
  function myfun(){
    slide.forEach(function(curImg){
        curImg.style.transform ='translateX(-${count * 114}%)'
    })
  }


  let submit = document.getElementById("submit");
  submit.addEventListener("click", function(){
    let name =document.getElementById("name");
    let pass =document.getElementById("pass");

    
  if(name.value == "" && pass.value == ""){
    alert("Please Enter Name and password");

  } else {
    alert("Thanks For connect");
  
  }
  })