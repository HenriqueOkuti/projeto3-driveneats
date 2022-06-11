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

        const buttom_order = document.querySelector(".checkout a")
        buttom_order.classList.add("active");
        buttom_order.innerHTML = "Fechar pedido"

        const total = price_maindish + price_drink + price_drink;
        order_text = `Olá, gostaria de fazer o pedido: \n- Prato: ${type_maindish} \n- Bebida: ${type_drink} \n- Sobremesa: ${type_dessert} \nTotal: R$ ${(total).toFixed(2)} `;


        console.log(`Total: ${total.toFixed(2)}`);
        console.log(order_text);

        console.log(type_maindish, type_drink, type_dessert);

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

    const whatsapp = `https://wa.me/5516982266324?text=${encodeURIComponent(order_text)}`;

    window.open(whatsapp);

    console.log(encodeURIComponent(order_text));
    /* https://wa.me/5521963120000?text=urldamensagempronta */

}


/*================================================
- Peça o nome e endereço
    
    Ao clicar em finalizar pedido, lance dois `prompt` para o usuário solicitando seu nome e endereço. 
    Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse **formato** 
    (igualzinho, sem nenhum caracter a mais):

    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70

    Nome: Fulano
    Endereço: Rua...

================================================*/