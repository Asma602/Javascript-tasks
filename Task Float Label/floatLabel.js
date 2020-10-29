
let formContainer = document.getElementById('form-container');


function toggleFocusedInput(){
    let label = this.nextElementSibling;
    console.log(label);
    label.classList.add("focusedClass");
}


let inputs = document.getElementsByTagName('input');
    console.log(inputs);
    for(let x of inputs){
        x.addEventListener('onfocus',toggleFocusedInput);
        // x.addEventListener('blur',toggleFocusedInput);
    }
function addField(){
    let formField = document.createElement('div');
    formField.className = "form-field";
    let formControl = document.createElement('input');
    formControl.setAttribute('type','url');
    formControl.setAttribute('required',true);
    formControl.className = "form-control";
    let fieldLabel = document.createElement('label');
    fieldLabel.innerHTML='Your Website';
    fieldLabel.setAttribute('Id','addedField');
    formField.appendChild(formControl);
    formField.appendChild(fieldLabel);
    fieldLabel.className = "labelClass";
    formContainer.lastElementChild.before(formField);
    inputs.nextElementSibling = formControl;
    // formControl.addEventListener('onfocus',toggleFocusedInput);
}




let addbtn = document.getElementById('addFieldBtn');
addbtn.addEventListener('click',addField);