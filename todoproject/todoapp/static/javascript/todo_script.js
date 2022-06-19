function display(){
    var input = document.getElementById('input')
   
    if(input.value == ""){
        document.getElementById('error').innerHTML="Please Enter Your Task"
        document.getElementById('input').style.borderColor="red"
        document.getElementById('error').style.color="red"
    }
    else{
        var li = document.createElement('li')  //to add item that enter on text box to li
        li.textContent = input.value
        list.appendChild(li,list)
    }  
}