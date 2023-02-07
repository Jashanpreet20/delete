// studentobj = {

//     'yash': 26,
    
//     'vaibhav': 24,
    
//     'rajesh' : 25,
    
//     }

//     let sum=0;
// for (let price of Object.values(studentobj)) {
//     sum += price;
//   }
//   console.log(sum);
//   var objlength=Object.values(studentobj).length;
//   console.log(objlength);

// var averageage=sum/objlength;

//   console.log(averageage);




// example of closurs in js
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y();
// }
//   var z=x();
//   z();
//how to iterate through object 
//  var obj={
//     "key1":"value1",
//     "keys2":"value2"
//  } 

//    // console.log(Object.values(obj));
//  var arrayofkeys=(Object.keys(obj));

//  arrayofkeys.forEach(key =>{
//     console.log(obj[key]);
//  })
    



const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.getElementById('users');


form.addEventListener('submit',onsubmit);

//userlist.addEventListener('click',removeitem);




function onsubmit(e){
    e.preventDefault();
    
    
var showlist=[];
var names=nameInput.value;
var email=emailInput.value;
 var myobj ={
    names,
    email
 }

    showlist.push(myobj);
   // localStorage.setItem(myobj.names,JSON.stringify(showlist));
    // localStorage.setItem('name',nameInput.value);
    // localStorage.setItem('email',emailInput.value);
     
    axios.post('https://crudcrud.com/api/b31f4f3d45704eb7aa906c89baa44ac0/appointment_data',myobj)
    .then(response => console.log(response))
    .catch(err => console.log(err));
    //create li


//create button
var button=document.createElement('button');
var editbtn=document.createElement('button');
button.appendChild(document.createTextNode('delete'));
editbtn.appendChild(document.createTextNode('Edit'));



    if(nameInput.value ==='' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='please enter all field';

        setTimeout(() => msg.remove(),3000);
    }else{
         li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : 
        ${emailInput.value}`));
        
    

       
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(button);
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(editbtn);
         userlist.appendChild(li);

        //clear the fields

        nameInput.value='';
        emailInput.value='';
    
         button.onclick = () =>{
            localStorage.removeItem(myobj.names);
            userlist.removeChild(li);
           }

           editbtn.onclick = () =>{
            
            localStorage.removeItem(myobj.names);
            userlist.removeChild(li);
            document.getElementById('email').value=myobj.email;
            document.getElementById('name').value=myobj.names;
           }






    }


     //create dlt button
     
}





