
const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.getElementById('users');


form.addEventListener('submit',onsubmit);

//create button
var button=document.createElement('button');
var editbtn=document.createElement('button');
button.appendChild(document.createTextNode('delete'));
editbtn.appendChild(document.createTextNode('Edit'));
var li=document.createElement('li');

     

       li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(button);
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(editbtn);
function onsubmit(e){
    e.preventDefault();

    var names=nameInput.value;
var email=emailInput.value;
 var myobj ={
    names,
    email
 }
//  axios.post('https://crudcrud.com/api/a9bc057779f94e6a935a70f791b44cc4/justdemo',myobj)
//     .then((res) =>
//     console.log(res))
//      showdata(res.data)
//     .catch(err => console.log(err));
axios.get("https://crudcrud.com/api/d6035c4e2361440f9bc1959f1a26b385/demo")
.then(res => showdata(res))
.catch((err) => console.log(err));
}

button.onclick = () =>{
  removeTodo();

 }
 function removeTodo() {
  axios({
    method:'delete',
    url:'https://crudcrud.com/api/d6035c4e2361440f9bc1959f1a26b385/demo/63e3b9a381b3ab03e847514d',

  })
  .then(res => showdata(res))
  .catch(err => console.log(err));
 
}
function showdata(res) {
    
    li.appendChild(document.createTextNode(`${JSON.stringify(res.data, null, 2)}`))
   

    
  }

  
  userlist.appendChild(li);

   // <div class="card card-body mb-4">
      // <h5>Status: ${res.status}</h5>
    // </div>
  
   
  
    // <div class="card mt-3">
    //   <div class="card-header">
    //     Data
    //   </div>
    //   <div class="card-body">
    //     <pre>${JSON.stringify(res.data, null, 2)}</pre>
    //   </div>
    // </div>