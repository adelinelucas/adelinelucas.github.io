function parse_id(id) {
  let divided = id.split("-");
  if (divided.length > 0) {
    return divided[1];
  }
  return id;
}

function delete_btn(e) {
  // console.log(e.target.id);
  let number = parse_id(e.target.id);
  let card = document.querySelector(`#card-${number}`);
  card.remove();
}

function add_btn(e) {
  // console.log(e.target.id);
  let number = parse_id(e.target.id);
  console.log(number);
  let DOM_pu = document.querySelector(`#price-${number}`);
  let DOM_quantity = document.querySelector(`#quantity-${number}`);
  let DOM_total = document.querySelector(`#total-${number}`);

  let pu = DOM_pu.innerHTML;
  let quantity = DOM_quantity.innerHTML;
  let total = DOM_total.innerHTML;

  quantity = parseInt(quantity);
  quantity += 1;

  total = pu * quantity;

  DOM_quantity.innerHTML = quantity;
  DOM_total.innerHTML = total;
}

function minus_btn(e) {
  // console.log(e.target.id);
  let number = parse_id(e.target.id);
  console.log(number);
  let DOM_pu = document.querySelector(`#price-${number}`);
  let DOM_quantity = document.querySelector(`#quantity-${number}`);
  let DOM_total = document.querySelector(`#total-${number}`);

  let pu = DOM_pu.innerHTML;
  let quantity = DOM_quantity.innerHTML;
  let total = DOM_total.innerHTML;

  quantity = parseInt(quantity);

  if (quantity > 1) quantity -= 1;

  total = pu * quantity;

  DOM_quantity.innerHTML = quantity;
  DOM_total.innerHTML = total;
}

let buttons = document.querySelectorAll(".deletebtn");

buttons.forEach((button) => {
  button.addEventListener("click", delete_btn);
});

let addbuttons = document.querySelectorAll(".addbtn");

addbuttons.forEach((button) => {
  button.addEventListener("click", add_btn);
});

let minusbuttons = document.querySelectorAll(".minusbtn");

minusbuttons.forEach((button) => {
  button.addEventListener("click", minus_btn);
});
