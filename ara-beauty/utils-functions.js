import {addAlertMessage, generateCatalogueArticleHTMLEl,renderCartItemsInNav, renderFilterMessage, renderCartHTMLContent} from './utils-renderHTML-elments.js';


export const loaderEl = () =>{
    let loadingEl = document.createElement('div');
    loadingEl.classList.add("loading-container", "d-flex", "justify-content-center")
    loadingEl.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
    let heroContainer = document.querySelector('.header__hero-section')
    heroContainer.append(loadingEl)
}
export const remove_loaderEl = () =>{
    let loadingEl = document.querySelector('.loading-container')
    loadingEl.remove()
}

export const displayBestSellerTitle = () =>{
    let bestSellerTitle = document.querySelector('.main__best-sellers__title')
    bestSellerTitle.classList.replace('d-none', 'd-block');
}

export const displayFilterByPriceBtns = () =>{
    let filterByPriceEl = document.querySelector('.header__filter-section')
    filterByPriceEl.style.display = 'block';
}

export const displayFilters = () =>{
    let filtersEl = document.querySelector('.header__filter-section')
    filtersEl.style.display = "block"
}

export const fetchProductsData = async(url) =>{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export const filterByLowestPrice = (productsList, containerElement) =>{
    let filteredProduct = []
    containerElement.innerHTML =''
    filteredProduct = productsList.sort((a,b)=> a.price - b.price)
    
    filteredProduct.forEach((product)=>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    return containerElement
}

export const filterByHighesttPrice = (productsList, containerElement) =>{
    let filteredProduct = []
    containerElement.innerHTML =''
    filteredProduct = productsList.sort((a,b)=> b.price - a.price)
    filteredProduct.forEach((product)=>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    return containerElement
}

export const filterByPrice = (productsList, containerElement, btn) =>{
    let filteredProduct = []
    let btnType = btn.getAttribute('id');

    btn.addEventListener('click', ()=>{
        containerElement.innerHTML ='';

        if(btnType ==='filter-lowest-price'){
            filteredProduct = productsList.sort((a,b)=> a.price - b.price)
        }
        else{
            filteredProduct = productsList.sort((a,b)=> b.price - a.price)
        }

        filteredProduct.forEach((product)=>{
            containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
            addProductToFavourite("standard");
        })
        return containerElement
    })
}

export const displayBestSellerInDOM = (containerElement, productsArray, modalCart) => {
    let bestsellersproducts = productsArray.filter((product) => product.isBestSeller)
    bestsellersproducts.forEach(( product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    addProductToFavourite("favourite");
    manageCartItemBestSeller(modalCart);
}

export const displayProductsInDOM = (containerElement, productsArray, modalCart ) => {
    let filteredProducts = productsArray;
    containerElement.innerHTML = "";
    // generate products loading the page
    filteredProducts.forEach((product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product);
    })
    addProductToFavourite("standard");
    manageCartItemCatalogue(modalCart);
}

export const displayFilteredProductsInDOM = (containerElement, categoriesTypes=null, productsArray ) =>
{
    let filteredProducts = null;
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
                displayProductsInDOM(containerElement, filteredProducts)
            })
        })
    }
}

export const addProductToFavourite = (productType) =>{
    let favouriteCountNav = document.querySelector('.header__products__actions .bi-heart')
    if(favouriteCountNav === null){
        favouriteCountNav = document.querySelector('.header__products__actions .bi-heart-fill')
    }
    let favouriteEl = document.getElementById('numFavouriteItems')
    let favouritesBtns = null 
    let countFavouriteProducts = 0
    

    if(productType==="standard"){
        favouritesBtns = document.querySelectorAll('.main__articles_container .add-product-to-favorite');
    }
    if(productType==="favourite"){
        favouritesBtns = document.querySelectorAll('.main__best-sellers .add-product-to-favorite')
    }

    favouritesBtns.forEach((btn) =>{
        let listenAddFavourite = btn.addEventListener('click', ()=>{

            if(favouriteEl.innerHTML !== ''){
                countFavouriteProducts = parseInt(favouriteEl.innerHTML)
            }

            if(btn.classList.contains('bi-heart-fill')){
                countFavouriteProducts -= 1;
                btn.classList.remove('bi-heart-fill')
                btn.classList.add('bi-heart')
            }else{
                countFavouriteProducts += 1;
                btn.classList.add('bi-heart-fill')
                btn.classList.remove('bi-heart')
                addAlertMessage("add-favourite")
            }
            
            if(countFavouriteProducts > 0 ){
                favouriteCountNav.classList.add('bi-heart-fill')
                favouriteCountNav.classList.remove('bi-heart')
            }else{
                favouriteCountNav.classList.remove('bi-heart-fill')
                favouriteCountNav.classList.add('bi-heart')
            }
            favouriteEl.innerHTML = countFavouriteProducts
        })
        removeEventListener('click', listenAddFavourite)
    }) 

}

export const filterProductBySearchButton = (button, searchInput ,productsArray,containerElement) =>{
    let filteredProducts = null;
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        let searchInputValue = searchInput.value.toLowerCase().trim(); 
        filteredProducts = productsArray.filter((product) => {
            
            if((product.title.toLowerCase()).includes(searchInputValue) || product.description.includes(searchInputValue) || product.category.includes(searchInputValue)) return product
        })
        if(filteredProducts.length > 0){
            displayProductsInDOM(containerElement, filteredProducts)

        }else {
            renderFilterMessage(containerElement)
        }
    })
}

export const filterProductBySearch = (searchInput ,productsArray,containerElement) =>{
    let filteredProducts = null;
    searchInput.addEventListener('keypress', (e)=>{
        e.preventDefault
        let searchInputValue = e.target.value.toLowerCase().trim(); 
        if(e.keyCode === 13 && searchInputValue !== ''){
            filteredProducts = productsArray.filter((product) => {
            
                if((product.title.toLowerCase()).includes(searchInputValue) || product.description.includes(searchInputValue) || product.category.includes(searchInputValue)) return product
            })
            if(filteredProducts.length > 0){
                displayProductsInDOM(containerElement, filteredProducts)
    
            }else {
                renderFilterMessage(containerElement)
            }
        }
        else{
            displayProductsInDOM(containerElement, productsArray)
        }
    })
    searchInput.addEventListener('change', (e)=>{
        e.preventDefault;
        let searchInputValue = e.target.value.toLowerCase();
        if(searchInputValue === ''){
            displayProductsInDOM(containerElement, productsArray)
        }
    })
}

// FUNCTIONS FOR MANAGE CART 

// Add an item in cart on click on "+" element of the card
const addItemsInCart = (btns, modalCart, modale=false) =>{
    btns.forEach((btn)=>{
        let addItem = btn.addEventListener('click', ()=>{

            for (const [key, value] of Object.entries(modalCart)) {
                if(modalCart[key].quantity === 0){
                    delete modalCart[key];
                }
            }

            console.log(modalCart)

            let product = btn.parentElement.parentElement.parentElement.parentElement.parentElement; 

            // redifine product if click on modal + btn
            if(modale){
                product = btn.parentElement.parentElement.parentElement;
            }
            let productId= product.dataset.id;
            let productPrice=  parseInt(product.dataset.price);
            let numberCartItemEl = document.getElementById('numCartItems');
            let totalItems = parseInt(numberCartItemEl.dataset.totalitems);
            let numberCartItemContent = numberCartItemEl.innerHTML;
            let numberCartItem = 0;
            if(numberCartItemContent !== ''){
                numberCartItem = parseInt(numberCartItemContent);
            }          

            numberCartItem += 1
            totalItems += 1;            
            numberCartItemEl.dataset.totalitems = totalItems;
            console.log(modalCart)


            if(Object.keys(modalCart).length === 0) {
                 let productObject = {
                    id: productId,
                    price: productPrice,
                    quantity: 1
                }
                modalCart[productId] = {...productObject}
            }
            else{
                for (const [key, value] of Object.entries(modalCart)) {
                    if(key == productId){ 
                        modalCart[productId].quantity = value.quantity + 1  ;
                    }else{
                        let arrayOfKey = []; 
                        for (const [key, value] of Object.entries(modalCart)){
                            arrayOfKey.push(key.toString())
                        }
                        console.log(arrayOfKey)
                        console.log(modalCart)
                        if(!arrayOfKey.includes(productId)){
                            let productObject = {
                                id: productId,
                                price: productPrice,
                                quantity: 1
                            }
                            modalCart[productId] = {...productObject}
                        }                      
                    }
                }
            }
            console.log('test');
            renderCartItemsInNav(numberCartItem)
            addAlertMessage("add-product")
            renderCartModal(modalCart);
            console.log(modalCart)
            return modalCart
        })
        btn.removeEventListener('click', addItem)
    })

}

// Remove an item in cart on click on "+" element of the card
const removeItemsInCart = (btns, modalCart, modale=false) => {
    btns.forEach((btn)=>{
        let removeItem=  btn.addEventListener('click', ()=>{
            console.log(modalCart)
            // return;
            let product = btn.parentElement.parentElement.parentElement.parentElement.parentElement; 

            // redifine product if click on modal + btn
            if(modale){
                product = btn.parentElement.parentElement.parentElement;
            }
            let productId= product.dataset.id;
            let numberCartItemEl = document.getElementById('numCartItems');
            let totalItems = parseInt(numberCartItemEl.dataset.totalitems);
            let numberCartItemContent = numberCartItemEl.innerHTML;
            let numberCartItem = totalItems;

            console.log(modalCart)
            if(totalItems <= 1) {
                console.log('in total item < 1 ')
                numberCartItemContent = 0
                numberCartItemEl.dataset.totalitems = 0;
                modalCart = {}
                numberCartItem = 0;
                totalItems = 0;
            }else{
                numberCartItem -= 1;
                totalItems -=1;
                numberCartItemContent -= 1;
                numberCartItemEl.dataset.totalitems = numberCartItem;

                for (const [key, value] of Object.entries(modalCart)) {
                    if(key === productId){
                        modalCart[productId].quantity = value.quantity - 1  ;
                    }
                }
            }
            
            modalCart = filterCartObject(modalCart);
            console.log(modalCart)
            renderCartModal(modalCart);
            renderCartItemsInNav(numberCartItem)
            renderCartModal(modalCart);
            return modalCart
        })
        btn.removeEventListener('click', removeItem)
    })
}
// manage Cart Item 
const manageCartItemCatalogue = (modalCart) =>{
    let addItemToCartBtns = document.querySelectorAll('#articles-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #articles-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns, modalCart, false)
    removeItemsInCart(removeItemToCartBtns, modalCart, false)
}

const manageCartItemBestSeller = (modalCart) =>{
    let addItemToCartBtns = document.querySelectorAll('#bestseller-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #bestseller-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns, modalCart, false)
    removeItemsInCart(removeItemToCartBtns, modalCart,false)
}

// GESTION DU CART
export const renderCartModal = (modalCart) =>{
    let cartContainer = document.getElementById('cart-content');
    if(Object.keys(modalCart).length > 0   ){
        console.log(modalCart)
        renderCartHTMLContent(cartContainer, modalCart);
        manageCartItemModale(modalCart)
    }else{
        cartContainer.innerHTML = `
        <div class="container order-details text-center">
            <p>No product yet in your cart.</p>
            <p>Let's go find product to buy ! </p>
        </div>
        `
    }
}

const filterCartObject = (object) =>{
    let filteredCart = Object.fromEntries(
        Object.entries(object).filter(([key, value]) => value.quantity > 0) 
    )
    return filteredCart;  
}

const manageCartItemModale = (modalCart) =>{
    console.log('manage cart modale')
    let addCartsItem = document.querySelectorAll('#offproductorder .add-quantity');
    let removeCartsItem = document.querySelectorAll(' #offproductorder .remove-quantity');
    let deletebtns = document.querySelectorAll('#offproductorder .bi-trash');
    addItemsInCart(addCartsItem, modalCart, true);
    removeItemsInCart(removeCartsItem, modalCart, true);
    deleteItemInCartModale(deletebtns, modalCart);
}

const deleteItemInCartModale = (btns, modalCart) =>{
    btns.forEach(btn =>{
        const deleteItem = btn.addEventListener('click', ()=>{
            console.log('click')
            let product = btn.parentElement.parentElement.parentElement.parentElement;
            console.log(product)
            let productId= product.dataset.id;
            let numberCartItemEl = document.getElementById('numCartItems');
            let totalItems = parseInt(numberCartItemEl.dataset.totalitems);
            let numberCartItem = totalItems;
            let qty = null
            for (const [key, value] of Object.entries(modalCart)) {
                if(key === productId){
                    console.log('tot')
                    qty = modalCart[productId].quantity
                    delete modalCart[productId];
                }
            }
            numberCartItem -=qty;
            if(numberCartItem < 0){
                console.log('line 404')
                numberCartItem = 0
            }
            renderCartModal(modalCart);
            renderCartItemsInNav(numberCartItem)
        })
        btn.removeEventListener('click', deleteItem)
    })
}