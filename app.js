let encryptBtn = document.getElementById('encrypt-btn');
let decryptBtn = document.getElementById('decrypt-btn')
let eInput = document.getElementById('encryptedInput-1');
let dInput = document.getElementById('decryptedInput-1')
let pInput = document.getElementById('plainInput-1');
let inputs = [eInput, pInput];

inputs.forEach(input =>{
    input.oninput = () =>{
        input.value = input.value.toUpperCase();
    }
})

function encrypt(){
    let pInput = document.getElementById('plainInput-1').value;
    let solved = '';
    let shiftInput = parseInt(document.getElementById('shiftInput').value)

    for(var i = 0; i < pInput.length; i++){
        let ascii_num = pInput[i].charCodeAt();
        let sum = ascii_num + shiftInput;
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i];
    }
    eInput.value = solved;
}

encryptBtn.addEventListener('click', encrypt)

function decrypt(){
    let keyMessage = prompt('Please enter the decrypt key. The decrypt key is: bertochgg');
    let conversion = keyMessage.toLowerCase();
    let pInput = document.getElementById('plainInput-1').value;
    if(conversion == 'bertochgg'){
        dInput.value = pInput;
    }else{
        alert('The decrypt key is incorrect, please try again.')
    }
}

decryptBtn.addEventListener('click', decrypt)
