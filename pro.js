const priceinput=document.querySelector('#price');
const iteminput=document.getElementById('item');
const form=document.querySelector('#my-form');

form.addEventListener('click',onclick);


window.addEventListener('DOMContentLoaded',() =>{
    axios.get('https://crudcrud.com/api/5b2b724b99ff4f53b57edd66924f6345/appointmentdata/')
    .then((res) =>{
        console.log(res);

        for(var i=0; i<res.data.length; i++){
            showdata(res.data[i]);
        }

    })
    .catch(err => console.log(err))
})
function onclick(e)
{
    e.preventDefault();
    
var price=priceinput.value;
var item=iteminput.value;

var obj={
    price,item
}
    axios.post('https://crudcrud.com/api/5b2b724b99ff4f53b57edd66924f6345/appointmentdata/',obj)
    .then((res) =>{
        console.log(res);
    })
    .catch(err => console.log(err));
    priceinput.value="";
    iteminput.value="";
}

function showdata(obj)
{
    var li=document.createElement('li');
    li.innerHTML=li.innerHTML + `<li> ${obj.price} - ${obj.item}
                    <button onclick=deleteuser('${obj._id}')>delete</button>
                    <button onclick=edituser('${obj._id}')>eidt</button>
                    </li>`
    var userlist=document.querySelector('#users');
    userlist.appendChild(li);
}

function deleteuser(userid)
{
        axios.delete(`https://crudcrud.com/api/5b2b724b99ff4f53b57edd66924f6345/appointmentdata/${userid}`)
        .then((res) =>
         removeuerfromscreen(userid))
        .catch(err => console.log(err));
}

function edituser(userId)
{
    
//     document.querySelector('#price').value=priceinput.value;
//     document.querySelector('#item').value=iteminput.value;
//    // removeuerfromscreen(userid);
//     deleteuser(userId);
}

function removeuerfromscreen(userId){
    const childnodedeleted=document.getElementById(userId)
    if(childnodedeleted){
        userlist.removeChild(childnodedeleted);
    }
}