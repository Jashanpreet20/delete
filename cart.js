const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.getElementById('users');

form.addEventListener('submit',onsubmit);



var names = nameInput.value;
   var email = emailInput.value;

   var obj = {
       names,email
   }

   window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/e6efa6ada13f40d9bea2cbfffa4416e6/appointmentdata')
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
   
       axios.post('https://crudcrud.com/api/e6efa6ada13f40d9bea2cbfffa4416e6/appointmentdata', obj)
       .then(res => {
           showUserOnScreen(res.data)
           productprice(res.data);
           console.log(res)
       })
       .catch(err => {
           console.error(err);
       })

      
    
       
   }

   var li = document.createElement('li');
   function showUserOnScreen(obj){
       var delBtn = document.createElement('input');
       delBtn.type = "button";
       delBtn.value = "Delete";
       delBtn.onclick = () => {  
       }
       li.innerHTML = li.innerHTML + `<li> ${obj.names} - ${obj.email} 
                                    <button onclick=deleteuser('${obj._id}')>delete</button>
                                     <li>`;
       userlist.appendChild(li);   
   } 

   function productprice(price){
    var h1=document.createElement('h4');
    h1.innerHTML=h1.innerHTML+`total value worth of product is rs-: ${price.names}`;
    userlist.append(h1);
   }

   function deleteuser(userid){
    axios.delete(`https://crudcrud.com/api/e6efa6ada13f40d9bea2cbfffa4416e6/appointmentdata/${userid}`)
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