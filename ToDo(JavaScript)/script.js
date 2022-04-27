const ToDoList = document.querySelector('.ToDo-List');
const Input = document.querySelector('.txt');


let change = 0; 

document.querySelector('.add').addEventListener('click',function(){
    const text= Input.value;
    Input.value='';
    if(text!=''){
    const element=document.createElement('div');
    element.classList.add('task')
    const html=`
    <input type="text" class="txt_list" value="${text}">
    <i class='fas fa-trash-alt'></i>
    <i class='fas fa-check'></i>
`
    element.innerHTML=html;
    element.children[0].onclick=(e)=>uncheck(e);
    element.children[1].onclick=(e)=>trash(e);
    element.children[2].onclick=(e)=>check(e);
    ToDoList.append(element);
    }
})

function check(element){

        const edit_element=element.target;
        const field=edit_element.parentNode.children[0];
            field.classList.add('checked');
            edit_element.classList.remove('fa-check');
            field.readOnly=true;
        

}

function uncheck(element){

    const edit_element=element.target;
    const cross=edit_element.parentNode.children[2];
    edit_element.classList.remove('checked');
    cross.classList.add('fa-check');
    edit_element.readOnly=false;
        

}

function trash(element){

    const edit_element=element.target;
    const parent=edit_element.parentNode;
        parent.remove();
        

}

