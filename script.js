/*========================
    GLOBAL VARIABLES
========================*/

let price_maindish = undefined;
let price_drink = undefined;
let price_dessert = undefined;
let total = 0;

let type_maindish = "";
let type_drink = "";
let type_dessert = "";

/*========================
    AUXILIAR FUNCTIONS
========================*/

function pricenumber(price_string){

    price_string = price_string.replace("R$ " , "");
    price_string = price_string.replace("," , ".");
    
    return Number(price_string);

}


function select_item() {

    if (price_maindish !== undefined){
        if (price_drink !== undefined){
            if (price_dessert !== undefined){

                const buttom_order = document.querySelector(".checkout a")
                buttom_order.classList.add("active");
                buttom_order.innerHTML = "Fechar pedido"

                const total = price_maindish + price_drink + price_drink;
                const order_text = `Olá, gostaria de fazer o pedido: \n
                Prato: ${type_maindish} \n
                Bebida: ${type_drink} \n
                Sobremesa: ${type_dessert} \n
                Total: R$ ${(total).toFixed(2)}`;

                console.log(`Total: ${total.toFixed(2)}`);
        
            }
        }
    }
}

/*========================
    ROWS
========================*/

function select_maindish(part){
    const selected_item = document.querySelector(".maindish .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected");
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_maindish = pricenumber(price_string);
    type_maindish = part.querySelector(".item_title").innerHTML;

    console.log(price_maindish);

    select_item();

}

function select_drink(part){
    const selected_item = document.querySelector(".drink .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected");
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_drink = pricenumber(price_string);
    type_drink = part.querySelector(".item_title").innerHTML;

    console.log(price_drink);

    select_item();

}

function select_dessert(part){
    const selected_item = document.querySelector(".dessert .selected");

    if (selected_item !== null) {
        selected_item.classList.remove("selected");
    }

    part.classList.add("selected");

    let price_string = part.querySelector(".item_value").innerHTML;
    price_dessert = pricenumber(price_string);
    type_dessert = part.querySelector(".item_title").innerHTML;

    console.log(price_dessert);

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