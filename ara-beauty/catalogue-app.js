/* 
/!\ CAUTION /!\
 - START JSON-SERVER BEFORE LUNCH APP 
 - TO OPEN JS : open with live server because JS file are modules type
*/

// IMPORTS
import {sanitizedProductsList} from './utils-sanitizeProducts.js';
import {generateCatalogueArticleHTMLEl,renderCartItemsInNav} from './utils-productsRender.js';
import {loaderEl, remove_loaderEl, displayBestSellerTitle, displayFilters} from './utils-functions.js'
import {addAlertMessage} from './utils-renderHTML-elments.js';

// FUNCTIONS
const getProductsData = async(url) =>{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// GOBLALES
// update number of items in cart 
let numberCartItem = 0
let countFavouriteItem  = 0
let modalCart = [];

const manageModaleCart= () =>{
    // écouter le click sur l'ajout d'un produit 
    // ajouter dans le panier l'élement
    // utiliser un setter pour déclencher l'actualisation du cart

    let btnsAddProduct = document.querySelectorAll('.add-product-to-cart')
    let btnsRemoveProduct = document.querySelectorAll('.remove-product-to-cart')
    
    btnsAddProduct.forEach((btn) =>{
        btn.addEventListener('click', ()=>{
            let myCurrentCart = modalCart;
            let productInfoCard = btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
            let productId = productInfoCard.dataset.productid
            let productTitle = productInfoCard.querySelector('.card-title .title').textContent
            let productResume = productInfoCard.querySelector('.card-title .resume').textContent
            let productPrice = productInfoCard.querySelector('.current-price').textContent
            let quantity = 1
            let productObject = {}
            Object.assign(productObject,{id: productId}, {title: productTitle}, {resume: productResume}, {price: productPrice}, {quantity: quantity});
            console.log(productId)
            // add my product on my cart 
            if(modalCart.length == 0){
                myCurrentCart.push(productObject)
            }else{
                modalCart.forEach((index)=>{
                    if(index.id === productId )
                    {
                        console.log(index.title)
                        index.quantity += 1

                    }else{
                        myCurrentCart.push(productObject)
                    }
                })
            }
            console.log(modalCart)
            modalCart = myCurrentCart
            return modalCart
        })
    })

    btnsRemoveProduct.forEach((btn) =>{
        btn.addEventListener('click', ()=>{
            let myCurrentCart = modalCart;
            console.log('click in add prodcuts')
            let productInfoCard = btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
            let productId = productInfoCard.dataset.productid
            let productTitle = productInfoCard.querySelector('.card-title .title').textContent
            let productResume = productInfoCard.querySelector('.card-title .resume').textContent
            let productPrice = productInfoCard.querySelector('.current-price').textContent
            let quantity = 1
            let productObject = {}
            Object.assign(productObject,{id: productId}, {title: productTitle}, {resume: productResume}, {price: productPrice}, {quantity: quantity});
            // add my product on my cart 
            
            myCurrentCart.forEach((index)=>{
                if(index.id === productId )
                {
                    console.log(index.title)
                    index.quantity -= 1

                    if(index.quantity <= 0){
                        myCurrentCart = modalCart.filter((product) => product.id !== productId)
                    }

                }
            })
            console.log(modalCart)
            modalCart = myCurrentCart
            return modalCart
        })
    })

    console.log(modalCart)
}



const modalProductInfoHTML = (data = {title:"faketitle", img:"fakeimage",price:51, resume:"fake resume" }) =>{
    let orderDetailsEL = document.querySelector('.order-details-body')
    let orderedProductDetail = `
    <div class="row mb-2 row-cols-1 row-underline product-details" >
        <div class="col-3 px-0">
            <div class="row row-cols-1">
                <div class="pe-0">
                    <img src=${data.img} class="" alt="${data.title} added to cart" width="50px">
                </div>
            </div>
        </div>
        <div class="col-3 d-flex flex-column justify-content-center px-0 py-1 ">
            <div class="cart-product-title"><p class="mb-1">${data.title}</p></div>
            <div><p class="mb-1">${data.resume}</p></div>
        </div>
        <div class="col-2 d-flex justify-content-center py-1 px-1 ">
            <p><span class="product-unit-price">${data.price}</span>$</p>
        </div>
        <div class="col-2 d-flex justify-content-center py-1 ps-1 pe-2 update-quantity-el">
            <div class="d-flex align-items-start">
                <div class="cart-add-quantity">+</div>
                <input type="text" name="update-quantitty" id="btn-update-quantity" min="1" value="quantity of products">
                <div class="cart-remove-quantity">-</div>
            </div> 
        </div>
        <div class="col-2 px-2 py-1">
            <div class="row d-flex justify-content-start">
                <p><span>prix à calculer selon la quantité</span>$</p>
            </div>
            <div class="row d-flex justify-content-end">
                <button type="button">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
    `
    orderDetailsEL.append(orderedProductDetail)
}

const addProductToFavourite = (countFavouriteItem) =>{
    let favouritesBtns = document.querySelectorAll('.main__articles_container .add-product-to-favorite')
    let favouriteCountNav = document.querySelector('.header__products__actions .bi-heart')
    let favouriteEl = document.getElementById('numFavouriteItems')
    
    favouritesBtns.forEach((btn) =>{
        let listenAddFavourite = btn.addEventListener('click', ()=>{
            console.log(btn)
            
            if(btn.classList.contains('bi-heart-fill')){
                countFavouriteItem -= 1;
                btn.classList.remove('bi-heart-fill')
                btn.classList.add('bi-heart')
            }else{
                countFavouriteItem += 1;
                btn.classList.add('bi-heart-fill')
                btn.classList.remove('bi-heart')
                addAlertMessage("add-favourite")
            }
            favouriteEl.innerHTML = countFavouriteItem;
            
            if(countFavouriteItem > 0 ){
                favouriteCountNav.classList.add('bi-heart-fill')
                favouriteCountNav.classList.remove('bi-heart')
            }else{
                favouriteCountNav.classList.remove('bi-heart-fill')
                favouriteCountNav.classList.add('bi-heart')
            }
        })
        removeEventListener('click', listenAddFavourite)
    }) 
}

const addBestSellerToFavourite = () =>{
    let favouritesBtns = document.querySelectorAll('.main__best-sellers .add-product-to-favorite')
    let favouriteCountNav = document.querySelector('.header__products__actions .bi-heart')
    let favouriteEl = document.getElementById('numFavouriteItems')
    
    favouritesBtns.forEach((btn) =>{
        let listenAddFavourite = btn.addEventListener('click', ()=>{           
            if(btn.classList.contains('bi-heart-fill')){
                countFavouriteItem -= 1;
                btn.classList.remove('bi-heart-fill')
                btn.classList.add('bi-heart')
            }else{
                countFavouriteItem += 1;
                btn.classList.add('bi-heart-fill')
                btn.classList.remove('bi-heart')
                addAlertMessage("add-favourite")
            }
            favouriteEl.innerHTML = countFavouriteItem;
            
            if(countFavouriteItem > 0 ){
                favouriteCountNav.classList.add('bi-heart-fill')
                favouriteCountNav.classList.remove('bi-heart')
            }else{
                favouriteCountNav.classList.remove('bi-heart-fill')
                favouriteCountNav.classList.add('bi-heart')
            }
        })
        removeEventListener('click', listenAddFavourite)
    }) 
}
const displayJS = (productsList) =>{
    displayFilters()

    let myProductsSanitized = sanitizedProductsList(productsList)

    // display products
    let categoriesTypes = document.querySelectorAll('.offcanvas-body ul li a')
    const articlesContainer = document.getElementById('articles-container')
    displayProductsInDOM(articlesContainer, categoriesTypes,myProductsSanitized)

    // display bestSeller products
    const bestSellerContainer = document.getElementById('bestseller-container')
    displayBestSellerInDOM(bestSellerContainer, myProductsSanitized)

    // search products
    const searchbar = document.getElementById('search-input');
    const searchbutton = document.getElementById('search-button');
    // filter element
    const filterLowestPrice = document.getElementById('filter-lowest-price');
    console.log(filterLowestPrice)
    const filterHighestPrice = document.getElementById('filter-highest-price')

    filterLowestPrice.addEventListener('click', ()=>{
        filterByLowestPrice(myProductsSanitized, articlesContainer )
        manageCartItemCatalogue()
        addProductToFavourite()
    })

    filterHighestPrice.addEventListener('click', ()=>{
        console.log('click')
        filterByHighesttPrice(myProductsSanitized, articlesContainer )
        manageCartItemCatalogue()
        addProductToFavourite()
    })
    // manage shearch bar
    searchbar.addEventListener('keyup', (e)=>{
        e.preventDefault();
        if(e.code ==='Enter' ){
            closeSearchModal()
            searchbar.blur()
            return
        }
        getSearchedProductsV2(e.target.value, articlesContainer, myProductsSanitized)
        manageCartItemCatalogue()
        // manage favourite feature
        addProductToFavourite()
    })
    

    // manage click on search button
    searchbutton.addEventListener('click', (e) =>{
        e.preventDefault();
        getSearchedProductsV2(searchbar.value, articlesContainer, myProductsSanitized)
        closeSearchModal()
        searchbar.value = ''
        manageCartItemCatalogue()
        // manage favourite feature
        addProductToFavourite()
    })
    manageCartItemCatalogue()    
    manageCartItemBestSeller()
    // manage favourite feature
    addProductToFavourite()
}
// GET DATA ON PAGE LOAD
document.addEventListener('DOMContentLoaded', async()=>{
    const url = 'http://localhost:3000/products';
    // const url = './products.json'
    /*
    errors products test
    const urlTestProducts = 'http://localhost:3004/products';
    let errorproductsList = await getProductsData(urlTestProducts)
    let myProducts = sanitizedProductsList(errorproductsList)
    */

    let productsList = await getProductsData(url)
    let catagoriesNames = getCategoriesNames()

    // loading of spinner timer while fetching data from json file
    loaderEl()
    displayBestSellerTitle(false)
    
    let loadingProducts = setTimeout(()=>{
        remove_loaderEl() 
        displayJS(productsList)
        displayBestSellerTitle(true)
        manageModaleCart()
    },"1500")

    
})
/////
//////

// GET CATEGORY NAME USING DATA ATTRIBUT
const getCategoriesNames = () =>{
    let categoriesEl = document.querySelectorAll('.offcanvas-body ul li a')
    let categoriesList = [];
    categoriesEl.forEach((el) =>{
        categoriesList.push(el.dataset.category) 
    })
    return categoriesList
}

// 
const displayProductsInDOM = (containerElement, categoriesTypes=null, productsArray) =>{
    let filteredProducts = productsArray;
    // generate products loading the page
    filteredProducts.forEach((product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    // generate products if filtering by categories
    if(categoriesTypes){
        categoriesTypes.forEach((category) =>{
            category.addEventListener('click', ()=>{
                containerElement.innerHTML = ''
                filteredProducts = productsArray.filter((product) => {
                    if(category.dataset.category === 'all' ){
                        return productsArray
                    }else{
                        return product.category.includes(category.dataset.category)
                    }
                })
                filteredProducts.forEach((product) =>{
                    containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    
                })
                manageCartItemCatalogue()
                // manage favourite feature
                addProductToFavourite()
                return filteredProducts;
            })
        })
    }
}

const filterByLowestPrice = (productsList, containerElement) =>{
    let filteredProduct = []
    containerElement.innerHTML =''
    filteredProduct = productsList.sort((a,b)=> a.price - b.price)
    
    filteredProduct.forEach((product)=>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    return containerElement
}

const filterByHighesttPrice = (productsList, containerElement) =>{
    let filteredProduct = []
    containerElement.innerHTML =''
    filteredProduct = productsList.sort((a,b)=> b.price - a.price)
    filteredProduct.forEach((product)=>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    return containerElement
}

const displayBestSellerInDOM = (containerElement, productsArray) =>{
    let bestsellersproducts = productsArray.filter((product) => product.isBestSeller)
    bestsellersproducts.forEach(( product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    addBestSellerToFavourite()
}

// Add an item in cart on click on "+" element of the card
const addItemsInCart =(btns) =>{
    btns.forEach((btn)=>{
        let addItem = btn.addEventListener('click', ()=>{
            numberCartItem += 1
            renderCartItemsInNav(numberCartItemEl, numberCartItem)
            addAlertMessage("add-product")
        })
        btn.removeEventListener('click', addItem)
    })
}

// Remove an item in cart on click on "+" element of the card
const removeItemsInCart =( btnsEl) => {
    btnsEl.forEach((btn)=>{
        let removeItem=  btn.addEventListener('click', ()=>{
            if(numberCartItem <= 0) {
                numberCartItem = 0
            }else{
                numberCartItem -= 1
            }
            renderCartItemsInNav(numberCartItemEl, numberCartItem)
        })
        btn.removeEventListener('click', removeItem)
    })
}

// manage Cart Item 
const manageCartItemCatalogue = () =>{
    let addItemToCartBtns = document.querySelectorAll('#articles-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #articles-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns)
    removeItemsInCart(removeItemToCartBtns)
}
const manageCartItemBestSeller = () =>{
    let addItemToCartBtns = document.querySelectorAll('#bestseller-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #bestseller-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns)
    removeItemsInCart(removeItemToCartBtns)
}

const closeSearchModal = () =>{
    const closeModalBtn = document.querySelector('#searchBarContent button');
    let closeModaleContainer = closeModalBtn.parentElement.parentElement
    const searchbar = document.getElementById('search-input');

    if(closeModaleContainer.classList.contains('show')){
        closeModalBtn.click();
        searchbar.value = ''
    }
}
const getSearchedProductsV2 = (searchedValue, containerElement, productsArray) =>{
    let matchProducts = []
    containerElement.innerHTML = '';
    productsArray.filter((product) =>{
        if((product.title).toLowerCase().includes(searchedValue) || (product.resume).toLowerCase().includes(searchedValue)){
            matchProducts.push(product)
        }
    })
    if(matchProducts.length === 0){
        containerElement.innerHTML += `<div class="no-product-found">
            <p>Oops, no product available ! e</p>
        </div>`
    }else{
        matchProducts.forEach((product) =>{
            containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
        })
    }
}


