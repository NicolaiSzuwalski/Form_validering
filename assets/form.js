const feedBackElement = document.getElementById('feedback')
const submitButton = document.getElementById('sumbitButt');
const fName = document.getElementById('fName');
const eName = document.getElementById('eName');

fName.addEventListener('input', (event) =>{
    if(fName.value.length >= 2) {
        console.log('Above or equal to 2 characters')
        fName.classList.add('Valid')
    } else {
        console.log('Under 2 characters')
        fName.classList.add('notValid')
        fName.classList.remove('Valid')
    }
});


eName.addEventListener('input', (event) =>{
    if(eName.value.length >= 3) {
        console.log('Above or equal to 3 characters')
        eName.classList.add('Valid')
    } else {
        console.log('Under 3 characters')
        eName.classList.add('notValid')
        eName.classList.remove('Valid')
    }
});


submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log('clicked :' + event)
});









// let fName = false;
// let eName = false;

console.log(submitButton);

// feedBackElement.innerText = "Her skal der stå en error msg" errormsg
