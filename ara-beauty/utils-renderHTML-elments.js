import {productsData} from './productsData.js';

export const addAlertMessage = (alertType) =>{
    let icon = ''
    let message = ''
    if(alertType === "add-favourite"){
        icon = '<i class="bi bi-bag-heart-fill"></i>'
        message = "Product added to your favourite !"
    }
    if(alertType === 'add-product'){
       icon = '<i class="bi bi-bag-heart-fill"></i>' 
       message = "Product added to your cart !"
    }
    let addToFavouriteContainer = document.getElementById('alert-favourite-message')
    let addToFavouriteEL = document.createElement('div');
    let favouriteMessage = `<div class="alert alert-dismissible fade show" role="alert">
    <strong> ${icon} ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    addToFavouriteEL.innerHTML = favouriteMessage;
    addToFavouriteContainer.append(addToFavouriteEL) 
    setTimeout(()=>{
        addToFavouriteEL.innerHTML = ''
    }, '2000')
}

export const generateCatalogueArticleHTMLEl = (data) => {
    return `<article class="main__product__card card mb-md-5 mb-3 mt-3 border-0" style="max-width: 540px;" data-productid =${data.id}>
    <div class="row row-cols-2 g-0">
        <div class="col-5 main__product__card__bg d-flex align-items-center h-75">
            <img src=${data.img} class="card-img-top" alt="${data.title} - ${data.resume}">                
        </div>
        <div class="col-7 main__product__card__infos" data-id="${data.id}" data-price="${data.price}">
            <div class="card-body">
                <h5 class="card-title fw-bolder"><span class="title">${data.title}</span><span class="resume"> - ${data.resume}</span></h5>
                <p class="card-text">${(data.description).slice(0,50)}...</p>
            </div>
            <div class="main__card__prices-infos card-body row row-cols-2 justify-content-end p-0 ">
                <p class="text-end w-auto"><span class="current-price text-decoration-line-through">${data.oldPrice}</span>$</p>
                <p class="w-auto"><span class="current-price text-danger">${data.price}$</span></p>
            </div>
            <div class="main__card__product-actions card-body row p-1">
                <div class="col-8">
                    <div class="row justify-content-evenly">
                        <div class="col-2">
                            <button class="btn btn-light bg-white rounded-pill border-dark">1</button>
                        </div>
                        <div class=" col-2">
                            <button class="btn btn-light bg-white add-product add-product-to-cart">+</button>
                        </div>
                        <div class=" col-2">
                            <button class="btn btn-light bg-white text-dark remove-product remove-product-to-cart">-</button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div>
                        <a class="icon-link icon-link-hover link--maroon-ara">
                            <i class="bi bi-heart add-product-to-favorite"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>`;   
}

export const renderCartItemsInNav = (numberCartItem) =>{
    let numberCartItemEl = document.getElementById('numCartItems')

    if(numberCartItem == 0){
        numberCartItemEl.innerHTML = ``;
    }else{
        numberCartItemEl.innerHTML = `
        ${numberCartItem}`;
    }
}

export const renderFilterMessage = (containerEl) =>{
    containerEl.innerHTML= `
    <div class="m-auto mt-3 border-0">
        <p class="text-center"><em class="fw-bold">Désolés !</em><br>Aucun produit ne correspond à votre recherche ! </p>
    </div>` ;
}

export const renderCartProduct = (product, quantity) =>{
    let productTotal = product.price * quantity;
    return `<div class="row mb-2 row-cols-1 row-underline product-details" data-id=${product.id} date-price=${product.price}>
        <div class="col-3 px-0">
            <div class="row row-cols-1">
                <div class="pe-0">
                    <img src=${product.img} class="" alt="Illustration du produit ${product.title}" width="50px">
                </div>
            </div>
        </div>
        <div class="col-3 d-flex flex-column justify-content-center px-0 py-1 ">
            <div class="cart-product-title"><p class="mb-1">${product.title}</p></div>
            <div><p class="mb-1">${product.resume}</p></div>
        </div>
        <div class="col-2 d-flex justify-content-center py-1 px-1 ">
            <p><span>${product.price}</span>$</p>
        </div>
        <div class="col-2 d-flex justify-content-center py-1 ps-1 pe-2 update-quantity-el">
            <div class="d-flex align-items-start">
                <div class="add-quantity">+</div>
                <input type="text" name="update-quantity" id="cart-product-quantity" min="1" value="${quantity}" disabled/>
                <div class="remove-quantity">-</div>
            </div> 
        </div>
        <div class="col-2 px-2 py-1">
            <div class="row d-flex justify-content-start">
                <p><span>${productTotal}</span>$</p>
            </div>
            <div class="row d-flex justify-content-end">
                <button type="button">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>`;
}

export const renderCartHTMLContent = (containerEl, cartProducts) =>{
    containerEl.innerHTML = '';
    let totalCartPrice = 0;
    let detailProduct = '';

    let updatedPrice = calculateTotalProduct(cartProducts, totalCartPrice);

    containerEl.innerHTML = `
    <div class="container order-details">
        <div class="row mb-2 row-cols-1 order-details-header">
            <div class="col-3 d-flex justify-content-end">
                
            </div>
            <div class="col-3 d-flex justify-content-center">
                <h4>Product</h4>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <h4>Price</h4>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <h4>Quantity</h4>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <h4>Total</h4>
            </div>
        </div>
        <div class="order-details-body">
        ` +  detailProduct + `
        </div>
    </div>

    <div class="offproductorder__ordercart-total justify-content-end  row row-cols-2 align-items-center my-4 w-100">
        <div class="offproductorder__ordercart-total-price-infos col-4 d-flex flex-column justify-content-end align-items-end">
            <div class="d-flex flex-column justify-content-end align-items-end">
                <h5 class="text-end">Total :</h5>
                <div class="separator"></div>
            </div>
        </div>
        <div class="d-flex align-items-center col-1">
            <p class="text-end ">${updatedPrice}<span class="money_unit">$</span></p>
        </div>
    </div>
    <div class="offproductorder__orderdetails row row-cols-1 justify-content-start my-4">
        <a href="./cartpagev2.html" class="link-order-details d-flex align-items-center">
            See order details
            <i class="bi bi-binoculars-fill"></i>

        </a>
    </div>
    <div class="row row-cols-1 row-cols-md-2 offproductorder__backetcart-actions justify-content-between flex-md-row-reverse align-items-center my-4">
        <button type="button" class="btn text-light m-auto">
            <a href="./checkoutv2.html">Valid my cart</a>
        </button>
        <button type="button" class="btn text-light m-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Back to my shopping</button>
    </div>
    `
    renderProduct(cartProducts, detailProduct);
}

const calculateTotalProduct = (cartProducts, totalCartPrice) =>{
    for (const [productsDataKey, productsDataproductsDataValue] of Object.entries(productsData)) {
        for (const [key, value] of Object.entries(cartProducts)) {
            if(productsDataproductsDataValue.id == key){
                totalCartPrice += value.quantity * value.price
            }
        } 
    } 
    return totalCartPrice
}

const renderProduct = (cartProducts, detailProduct) =>{
    let containerEl = document.querySelector('.order-details-body');

    for (const [productsDataKey, productsDataproductsDataValue] of Object.entries(productsData)) {
        for (const [key, value] of Object.entries(cartProducts)) {
            if(productsDataproductsDataValue.id == key){
                detailProduct += renderCartProduct(productsDataproductsDataValue,value.quantity)
            }
        } 
    }
    containerEl.innerHTML = detailProduct; 
} 