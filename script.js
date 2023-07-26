var value1,value2;
var op;
const text = document.getElementById("expr");

// Function definition for deleting all data of textField
const ac = document.getElementById("clear-all");
ac.addEventListener('click',function(){
    
    let val ="";
     
    text.value = val;
    // console.log(b);
});

// Function definition for deleting the textField's value character by character
const del = document.getElementById("del");
del.addEventListener('click',function(){
    
    let val = text.value;
     if(val.length > 0)
        val = val.slice(0,-1);
    text.value = val;
    // console.log(b);
});

// function for division
const div = document.getElementById("div");
div.addEventListener('click',function(){
    value1 = text.value;
    if(value1!="")
    {
        value1 = parseInt(text.value);
        text.value = "";
        op='/'
    }else{
        alert("Invalid format used");
    }
});

// function for multiplication
const multi = document.getElementById("multiply");
multi.addEventListener('click',function(){
    value1 = text.value;
    if(value1!="")
    {
        value1 = parseInt(text.value);
        text.value = "";
        op='*'
    }else{
        alert("Invalid format used");
    }
});

// function for subtraction
const sub = document.getElementById("subtraction");
sub.addEventListener('click',function(){
    value1 = text.value;
    if(value1!="")
    {
        value1 = parseInt(text.value);
        text.value = "";
        op='-'
    }else{
        alert("Invalid format used");
    }
});

// function for adition
const add = document.getElementById("adition");
add.addEventListener('click',function(){
    value1 = text.value;
    if(value1!="")
    {
        value1 = parseInt(text.value);
        text.value = "";
        op='+'
    }else{
        alert("Invalid format used");
    }
});

// function for percentage
const perc = document.getElementById("percentage");
perc.addEventListener('click',function(){
    value1 = text.value;
    if(value1!="")
    {
        value1 = parseInt(text.value);
        text.value = "";
        op='%'
    }else{
        alert("Invalid format used");
    }
});

// function for result button
const res = document.getElementById("result");
res.addEventListener('click',function(){
    value2 = text.value;
    var ans;
    if(value2!="")
    {
        // alert("in result");
        value2 = parseInt(value2);
        switch(op)
        {
            case '+':
                ans = value1+value2;
                break;

            case '-':
                ans = value1-value2;
                break;

            case '*':
                ans = value1*value2;
                break;

            case '/':
                ans = value1/value2;
                break;
                
            case '%':
                ans = (value1*value2)/100;
                break;
        }
        text.value = ans.toString();
    }else{
        alert("Invalid format used");
    }
});



// Function definition for every digit input
function appendChar(ch){
let val = text.value;
    val = val + ch;
    text.value = val;
}


