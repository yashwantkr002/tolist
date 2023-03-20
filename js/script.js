let input=document.getElementById("input");
let btn=document.getElementById("btn");
let cha=btn.value;
let table=document.getElementById("tab");
let listarry=[];
let getsave =localStorage.getItem("user");
let editid=null;
let inp=null;
let error=document.getElementById("error");
if( getsave !== null && getsave!=="undefined"){

  listarry=JSON.parse(getsave);
}
display();
/ main function start /

function fun(){

  if(input.value.length>0){
  inp=input.value;
  }
  else(
    error.innerHTML="your input is empaty"
  )
if(editid!==null){
 listarry.splice(editid,1,{"name": inp})
}

else if(inp!==null){
  listarry.push({'name':inp})
}
  save(listarry);
  display();  
 btn.value=cha;
 editid=null;
 input.value="";
 inp=null;

}
function save(save){
  let losave= JSON.stringify(save);
  localStorage.setItem("user",losave);
  

}
function display(){
  let disp ='';
   listarry.forEach((user,i) => {
       disp +=` <tr>
       <td><input id="check"type="checkbox"onclick="checks(${i})"></td>
       <td>${i+1}</td>
       <td>${user.name}</td>
       <td><i id="edit"class="fa-regular fa-pen-to-square" onclick="edit(${i})"></i></td>
       <td><i id="delet"class="fa-solid fa-trash" onclick="delet(${i})"></i></td>
     </tr>`

   });
table.innerHTML=disp;

}
function edit(id){
  editid=id;
  input.value=listarry[id].name;
  btn.value="Save edit";

      error.innerHTML="";
    
}
function delet(id){
    listarry.splice(id,1);
    save();
    display();
    error.innerHTML="";
}

/*function checks(id){
let check=document.getElementById("check").value;
    setTimeout((id)=>{
      delet(id);
    },5000)   
}*/


btn.addEventListener("click",fun)