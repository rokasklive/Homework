function modify(a){
    var digitOne = document.querySelector('#input1').value,
        digitTwo = document.querySelector('#input2').value,
        output = document.querySelector('#logic'),
        outcome = 0;

    if (a == 1){
        outcome = digitOne * digitTwo;
        document.querySelector('#output').value = parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
        output.innerHTML = digitOne + " × " + digitTwo + " = " + parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
    }
    else if (a == 2){
        outcome = digitOne / digitTwo;
        document.querySelector('#output').value = parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
        output.innerHTML = digitOne + " ÷ " + digitTwo + " = " + parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
    }
    else if (a == 3){
        outcome = +digitOne + +digitTwo;
        document.querySelector('#output').value = parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
        output.innerHTML = digitOne + " + " + digitTwo + " = " + parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
    }
    else if (a == 4){
        outcome = digitOne - digitTwo;
        document.querySelector('#output').value = parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
        output.innerHTML = digitOne + " - " + digitTwo + " = " + parseFloat(outcome).toFixed(6).replace(/\.?0*$/g,'');
    }
}

function pitagoras(){
    var width = document.querySelector('#width'),
        height = document.querySelector('#height'),
        diag = document.querySelector('#diag'),
        answer = 0;

    if (diag.value == "" && width.value != "" && height.value != "") {
        answer = Math.sqrt(width.value ** 2 + height.value ** 2);
        diag.value = parseFloat(answer).toFixed(6).replace(/\.?0*$/g,'');
        width.disabled = true;
        height.disabled = true;
        diag.disabled = true;
    }
    else if (diag.value != "" && width.value == "" && height.value != "") {
        answer = Math.sqrt(diag.value ** 2 - height.value ** 2);
        width.value = parseFloat(answer).toFixed(6).replace(/\.?0*$/g,'');
        width.disabled = true;
        height.disabled = true;
        diag.disabled = true;
    }
    else if (diag.value != "" && width.value != "" && height.value == "") {
        answer = Math.sqrt(diag.value ** 2 - width.value ** 2);
        height.value = parseFloat(answer).toFixed(6).replace(/\.?0*$/g,'');
        width.disabled = true;
        height.disabled = true;
        diag.disabled = true;
    }
    else if (diag.value != "" && width.value != "" && height.value != "") {
        height.value = height.defaultValue;
        width.value = width.defaultValue;
        diag.value = diag.defaultValue;
        width.disabled = false;
        height.disabled = false;
        diag.disabled = false;
    }

}
