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

let order_text;

/*========================
    AUXILIAR FUNCTIONS
========================*/

function pricenumber(price_string) {

    price_string = price_string.replace("R$ ", "");
    price_string = price_string.replace(",", ".");

    return Number(price_string);

}


function select_item() {

    if (price_maindish !== undefined && price_drink !== undefined && price_dessert !== undefined) {

        const buttom_order = document.querySelector(".checkout button")
        
        buttom_order.classList.add("open_hidden");
        buttom_order.innerHTML = "";
        

        const buttom_order2 = document.querySelector(".checkout a")

        buttom_order2.classList.add("active");
        buttom_order2.innerHTML = "Fechar pedido";

        total = price_maindish + price_drink + price_dessert;
        order_text = `Olá, gostaria de fazer o pedido: \n- Prato: ${type_maindish} \n- Bebida: ${type_drink} \n- Sobremesa: ${type_dessert} \nTotal: R$ ${(total).toFixed(2)} `;

    }
}


/*========================
    ROWS
========================*/

function select_maindish(part) {
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

function select_drink(part) {
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

function select_dessert(part) {
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

    console.log(encodeURIComponent(order_text));

    console.log(`${type_maindish} , ${price_maindish}`);
    console.log(`${type_drink} , ${price_drink}`);
    console.log(`${type_dessert} , ${price_dessert}`);
    console.log(`TOTAL , ${total}`);

    const overlay_choice = document.querySelector(".overlay");

    overlay_choice.classList.remove("hidden_overlay");
    overlay_choice.classList.add("show");

    const maindish_choice = document.querySelector(".maindish_row .item1");
    const drink_choice = document.querySelector(".drink_row .item2");
    const dessert_choice = document.querySelector(".dessert_row .item3");

    
    maindish_choice.innerHTML = `${type_maindish}`;
    drink_choice.innerHTML = `${type_drink}`;
    dessert_choice.innerHTML = `${type_dessert}`; 
    
    /*
    maindish_choice.innerHTML = "type_maindish";
    drink_choice.innerHTML = "type_drink";
    dessert_choice.innerHTML = "type_dessert"; 
    */

    const maindish_price = document.querySelector(".maindish_row .price1");
    const drink_price = document.querySelector(".drink_row .price2");
    const dessert_price = document.querySelector(".dessert_row .price3");    
    const total_price = document.querySelector(".total_row .pricetotal");    

    
    maindish_price.innerHTML = price_maindish.toFixed(2);
    drink_price.innerHTML = price_drink.toFixed(2);
    dessert_price.innerHTML = price_dessert.toFixed(2);
    total_price.innerHTML = `R$ ${total.toFixed(2)}`;

}


/*================================================

    BONUS: CONFIRM ORDER

================================================*/


function whatsapp() {

    /* https://wa.me/5521963120000?text=urldamensagempronta */
    const whatsapp = `https://wa.me/5516982266324?text=${encodeURIComponent(order_text)}`;
    window.open(whatsapp);

    const overlay_choice = document.querySelector(".overlay");
    overlay_choice.classList.add("hidden_overlay");
    overlay_choice.classList.remove("show");

}


function cancel() {

    const overlay_choice = document.querySelector(".overlay");
    overlay_choice.classList.add("hidden_overlay");
    overlay_choice.classList.remove("show");

}
