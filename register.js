// // studentobj = {

// //     'yash': 26,
    
// //     'vaibhav': 24,
    
// //     'rajesh' : 25,
    
// //     }

// //     let sum=0;
// // for (let price of Object.values(studentobj)) {
// //     sum += price;
// //   }
// //   console.log(sum);
// //   var objlength=Object.values(studentobj).length;
// //   console.log(objlength);

// // var averageage=sum/objlength;

// //   console.log(averageage);




// // example of closurs in js
// // function x(){
// //     var a=10;
// //     function y(){
// //         console.log(a);
// //     }
// //     return y();
// // }
// //   var z=x();
// //   z();
// //how to iterate through object 
// //  var obj={
// //     "key1":"value1",
// //     "keys2":"value2"
// //  } 

// //    // console.log(Object.values(obj));
// //  var arrayofkeys=(Object.keys(obj));

// //  arrayofkeys.forEach(key =>{
// //     console.log(obj[key]);
// //  })
    



// const form=document.querySelector('#my-form');
// const nameInput=document.querySelector('#name');
// const emailInput=document.querySelector('#email');
// const msg=document.querySelector('.msg');
// const userlist=document.getElementById('users');


// form.addEventListener('submit',onsubmit);

// var names=nameInput.value;
// var email=emailInput.value;
// var myobj=[
//   names,
//   email
// ]

// //userlist.addEventListener('click',removeitem);

// //create button
// var button=document.createElement('button');
// var editbtn=document.createElement('button');
// button.appendChild(document.createTextNode('delete'));
// editbtn.appendChild(document.createTextNode('Edit'));

// function showOutput(res) {
//     document.getElementById('res').innerHTML = `
//     <div class="card mt-3">
//       <div class="card-header">
//         Data
//       </div>
//       <div class="card-body">
//         <pre>${JSON.stringify(res.data, null, 2)}</pre>
//       </div>
//     </div>
//   `;
//   }



// function onsubmit(e){
//     e.preventDefault();
//     //    window.addEventListener("DOMContentLoaded" ,() =>{
//     //         axios.get("https://crudcrud.com/api/645d45dfdac048deb68d43c904fea7a8/data")
//     //         .then((response) =>{
//     //         console.log(response)
//     //         for(var i=0; i<response.data.length; i++)
//     //         {
//     //             showOutput(response.data[i]);
//     //         }

//     //         })
            
//     //         .catch(err => console.log(err));
//     // })
    

//  axios.post('https://crudcrud.com/api/645d45dfdac048deb68d43c904fea7a8/data',myobj)
//     .then((response) =>
//     console.log(response))
//      //showOutput(res.data)
//     .catch(err => console.log(err));

// }


// //  if(nameInput.value ==='' || emailInput.value === ''){
// //     msg.classList.add('error');
// //     msg.innerHTML='please enter all field';

// //     setTimeout(() => msg.remove(),3000);
// // }else{
// //       var li=document.createElement('li');
// //     // li.appendChild(document.createTextNode(`${nameInput.value} : 
// //     // ${emailInput.value}`));


//   //  showlist.push(myobj);
//    // localStorage.setItem(myobj.names,JSON.stringify(showlist));
//     // localStorage.setItem('name',nameInput.value);
//     // localStorage.setItem('email',emailInput.value);
     
   
    

   
       
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild(button);
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild( document.createTextNode( '\u00A0' ) );
//         // li.appendChild(editbtn);
//         //  userlist.appendChild(li);

//         // //clear the fields

//         // nameInput.value='';
//         // emailInput.value='';
    
//    //}


//      //create dlt button
     
// //}

// function deletes(){
//     button.onclick = () =>{
//         localStorage.removeItem(myobj.names);
//         userlist.removeChild(li);
//        }

// }

// function edit()
// {
//     editbtn.onclick = () =>{
//         localStorage.removeItem(myobj.names);
//         userlist.removeChild(li);
//         document.getElementById('email').value=myobj.email;
//         document.getElementById('name').value=myobj.names;
//        }
// }



//set data to local storage


 const form=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const numberinput=document.querySelector('#contact');
 const msg=document.querySelector('.msg');
 const userlist=document.getElementById('users');


 form.addEventListener('submit',onsubmit);

 var name = nameInput.value;
    var email = emailInput.value;
    var number=numberinput.value;
    var obj = {
        name,email,number
    }


 window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/a925663b89c24dc28e97065447046f2c/data')
    .then(res => {
        console.log(res)
        
    for(var i=0;i<res.data.length;i++)
    {
        showUserOnScreen(res.data[i])
        
    }
    })
    .catch(err => {
        console.log(err)
    })
})
    
function onsubmit(event)
{
    event.preventDefault();
    
    axios.post('https://crudcrud.com/api/a925663b89c24dc28e97065447046f2c/data', obj)
    .then(res => {
        showUserOnScreen(res.data)
        console.log(res)
    })
    .catch(err => {
        console.error(err);
    })

    nameInput.value=" ";
    emailInput.value=" ";
    numberinput.value=" ";
}
    var li = document.createElement('li');
function showUserOnScreen(obj){
    var delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = "Delete";
    delBtn.onclick = () => {  
    }
    li.innerHTML = li.innerHTML + `<li> ${obj.name} - ${obj.email} - ${obj.number} 
                                 <button onclick=deleteuser('${obj._id}')>delete</button>
                                 <button onclick=edituser('${obj._id},${obj.name},${obj.email},${obj.number}')>edit</button>
                                  <li>`;
    userlist.appendChild(li);   
} 

function edituser(userid,nameid,emailid,numberid){
    document.getElementById('name').value=nameid;
    document.getElementById('email').value=emailid;
    document.getElementById('contact').value=numberid;
    
    deleteuser(userid);
}


function deleteuser(userid){
    axios.delete(`https://crudcrud.com/api/a925663b89c24dc28e97065447046f2c/data/${userid}`)
    .then((response) =>{
        removeuerfromscreen(userid);
    }).catch(err => console.log(err));

}

function removeuerfromscreen(userId){
    const childnodedeleted=document.getElementById(userId)
    if(childnodedeleted){
        userlist.removeChild(childnodedeleted);
    }
}


