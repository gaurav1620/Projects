const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',addFunc);


const subBtn = document.getElementById('subBtn');
subBtn.addEventListener('click',subFunc);

const mulBtn = document.getElementById('mulBtn');
mulBtn.addEventListener('click',mulFunc);

const divBtn = document.getElementById('divBtn');
divBtn.addEventListener('click',divFunc);

const powBtn = document.getElementById('powBtn');
powBtn.addEventListener('click',powFunc);

const sumBtn = document.getElementById('sumBtn');
sumBtn.addEventListener('click',sumFunc);

const sinBtn = document.getElementById('sinBtn');
sinBtn.addEventListener('click',sinFunc);


function addFunc(){

    //Here a and b are in direct strings and not converted to numbers

    var a = document.getElementById('addInp1').value;
    var b = document.getElementById('addInp2').value;
    
    //result contains float
    var result = parseFloat(a)+parseFloat(b);

    //Changing the value of the html to our result 
    var x = document.getElementById('addRes');
    x.innerHTML = a + ' + ' + b +' = ' +result;
}



function subFunc(){
    //Here a and b are in direct strings and not converted to numbers

    var a = document.getElementById('subInp1').value;
    var b = document.getElementById('subInp2').value;
    
    //result contains float
    var result = parseFloat(a)-parseFloat(b);

    //Changing the value of the html to our result 
    var x = document.getElementById('subRes');
    x.innerHTML = a + ' - ' + b +' = ' +result;
}
function mulFunc(){
    //Here a and b are in direct strings and not converted to numbers

    var a = document.getElementById('mulInp1').value;
    var b = document.getElementById('mulInp2').value;
    
    //result contains float
    var result = parseFloat(a)*parseFloat(b);

    //Changing the value of the html to our result 
    var x = document.getElementById('mulRes');
    x.innerHTML = a + ' * ' + b +' = ' +result;
}
function divFunc(){
    //Here a and b are in direct strings and not converted to numbers

    var a = document.getElementById('divInp1').value;
    var b = document.getElementById('divInp2').value;
    
    //result contains float
    var result = parseFloat(a)/parseFloat(b);

    //Changing the value of the html to our result 
    var x = document.getElementById('divRes');
    x.innerHTML = a + ' / ' + b +' = ' +resulttoFixed(2);
}
function powFunc(){
    //Here a and b are in direct strings and not converted to numbers

    var a = document.getElementById('powInp1').value;
    var b = document.getElementById('powInp2').value;
    
    //result contains float
    var result = Math.pow(parseFloat(a),parseFloat(b));

    //Changing the value of the html to our result 
    var x = document.getElementById('powRes');

    //Remember here that a and b are still a string 
    x.innerHTML = a+'<sup>' + b + '</sup>' + ' = ' +result;
}
function sumFunc(){

    var a = parseFloat(document.getElementById('sumInp1').value);
    var b = parseFloat(document.getElementById('sumInp2').value);

    for(var i = a+1;i <= b;i++){
        a += i;
    }
    var result = a;

    //Changing the value of the html to our result 
    var x = document.getElementById('sumRes');
    x.innerHTML =  result;  
}

function sinFunc(){

    var a = parseFloat(document.getElementById('sinInp1').value);

    
    var result = Math.sin(a*Math.PI/180);
    var x = document.getElementById('sinRes');
    x.innerHTML =  'sin('+a+') = '+result.toFixed(2);  
}
