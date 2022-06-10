/*========================
    CARD
========================*/

function click_counter() {
   flag_choose = 0;
}


function choose_option() {
    const to_hide_color = document.querySelector(".hidden");
    const to_hide_arrow = document.querySelector(".hidden_arrow");

    to_hide_color.classList.toggle("hidden");
    to_hide_arrow.classList.toggle("hidden_arrow");

    /*
    if (flag_choose == 0){
    to_hide_color.classList.remove("hidden");
    to_hide_arrow.classList.remove("hidden_arrow");

    flag_choose = flag_choose ;
    }

    else if (flag_choose > 1){
        to_hide_color.classList.add("hidden");
        to_hide_arrow.classList.add("hidden_arrow");  

        flag_choose = 0;
    }
    */

}


/*========================
    CHECKOUT
========================*/

let remove_hidden = document.querySelector(".open_hidden");
remove_hidden.classList.remove("open_hidden");

let flag_order = false;

if (flag_order == true) {
    remove_hidden.classList.add("open_hidden");
    remove_hidden = document.querySelector(".closed_hidden");
    remove_hidden.classList.remove("closed_hidden");

}