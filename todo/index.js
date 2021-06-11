var lBox=document.getElementById('list-box');
var button=document.getElementById('btn');
var inbox=document.getElementById('input-box');


function createNode(msg){
    var item=document.createElement('li');
    item.appendChild(document.createTextNode(msg));
    item.innerHTML+=`<i class="fas fa-trash-alt icon">`;
    return  item;
}
button.addEventListener('click',function(){
    var msg=inbox.value;
    if(msg!=""){
        lBox.appendChild(createNode(msg));
        inbox.value="";
        addListener();
    }
    
})
function addListener(){
    document.querySelectorAll('.icon').forEach(item =>{
            item.addEventListener('click',function(e){

        e.target.parentNode.remove();
        
        })

    })
}
