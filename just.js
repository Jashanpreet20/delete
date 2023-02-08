
const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.getElementById('users');


form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    var names=nameInput.value;
var email=emailInput.value;
 var myobj ={
    names,
    email
 }
//  axios.post('https://crudcrud.com/api/d6035c4e2361440f9bc1959f1a26b385/demo',myobj)
//     .then((res) =>
//     console.log(res))
//      showdata(res.data)
//     .catch(err => console.log(err));
axios.get("https://crudcrud.com/api/d6035c4e2361440f9bc1959f1a26b385/demo")
.then(res => showdata(res))
   // console.log(res)
    // for(var i=0; i<res.data.length; i++)
    //         {
    //             showdata(res.data[i]);
    //         }
.catch((err) => console.log(err));
}

function showdata(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
   
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  

  `;
  }
  