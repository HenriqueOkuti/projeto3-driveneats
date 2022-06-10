/*========================
    GLOBAL VARIABLES
========================*/

let price_maindish = 0;
let price_drink = 0;
let price_dessert = 0;
let total = 0;

let type_maindish = "";
let type_drink = "";
let price_dessert = "";

/*========================
    AUXILIAR FUNCTIONS
========================*/

function pricenumber(price_string){

    price_string = price_string.replace("R$ " , "");
    price_string = price_string.replace("," , ".");
    
    return Number(price_string);

}


function select_item() {

    if ((price_maindish !== undefined) && (price_drink !== undefined) && (price_dessert !== undefined)) {

        const buttom_order = document.querySelector(".checkout a")
        buttom_order.classList.add("active");
        

    }



}

/*========================
    ROWS
========================*/

function select_maindish(part){
    const selected_item = document.querySelector(".maindish .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected")
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_maindish = pricenumber(price_string);
    type_maindish = part.querySelector().innerHTML;

    select_item();

}

function select_drink(part){
    const selected_item = document.querySelector(".drink .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected")
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_drink = pricenumber(price_string);
    type_drink = part.querySelector().innerHTML;

    select_item();

}

function select_dessert(part){
    const selected_item = document.querySelector(".dessert .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected")
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_dessert = pricenumber(price_string);
    type_dessert = part.querySelector().innerHTML;

    select_item();

}



/*========================
    CHECKOUT
========================*/


function finish_order() {



}


function send_order() {



}


function cancel() {




}