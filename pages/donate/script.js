//----------------------------Burger-menu-------------------------------------//
function onClickMenu() {
    document.getElementById('btn-menu').classList.toggle("active");
    document.getElementById('ul-menu').classList.toggle("active");
    document.getElementById('body-noscroll').classList.toggle("active");
    document.getElementById('body-shadow').classList.toggle("active");
}
//----------------------------Burger-menu-------------------------------------//



//----------------------------Slider-bar-------------------------------------//
document.addEventListener("click", function(isit) {
    the_class = isit. target.className;
    the_id = isit. target.id;
    let money = document.getElementById('pay-sum');
    let x = 0;

        if (the_class =="custom-checkbox") {
            x = document.querySelector("#"+the_id ).value;
            money.value = x;   
            // alert(x);
            //  console.log(x);
            //  console.log(money.value);
        } 
    });


function uncheck(){
 var uncheck = document.getElementsByClassName('custom-checkbox');
//  console.log(uncheck);
    for(var i=0; i<7; i++){
        if(uncheck[i].type=='radio') {
        uncheck[i].checked=false;
        }
    }
};

function checkValue(){
    var inputNumber = document.getElementById("pay-sum");
        if (inputNumber.value == 5000 || inputNumber.value == 2000 || inputNumber.value == 1000 || inputNumber.value == 500 || inputNumber.value == 250 || inputNumber.value == 100 || inputNumber.value == 50 || inputNumber.value == 25) {
            document.getElementById("sum" + inputNumber.value).checked = true;   
        } else {
            uncheck();
        }
}
//----------------------------Slider-bar-------------------------------------//





