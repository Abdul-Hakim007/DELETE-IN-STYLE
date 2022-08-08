document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('deleting-information').style.display = 'none';
})

//Focus
document.getElementById('delete-confirm').addEventListener('focus',function(){
    document.body.style.backgroundColor = ' #b03a2e ';
})
//Blur
document.getElementById('delete-confirm').addEventListener('blur',function(){
    document.body.style.backgroundColor = '  #f4f6f7  ';
})

// there are three events of key keydown keyup keypress

document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const deleteBtn = document.getElementById('delete-btn');

    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})

