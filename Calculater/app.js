let x;
//x = [];
x = '';
function alertMe(inp){
    
    console.log(typeof(inp))
    // if(typeof(inp) != Int){
    //     inp = Symbol(inp);
    // }
    
    //x.push(inp);
    x = x+inp;
    console.log(x);
    let y = document.getElementById("disp");
    
    y.innerHTML = x;
}

function myEvaluate(){
    
    
    
    alert("Result for "+x+' is : '+eval(x).toFixed(2));
    x = '';
    let y = document.getElementById("disp");
    
    y.innerHTML = x;
}