/* 
/!\ CAUTION /!\
 - START JSON-SERVER BEFORE LUNCH APP 
 - TO OPEN JS : open with live server because JS file are modules type
*/

// IMPORTS
import { productsData } from './productsData.js';
import {sanitizedProductsList} from './utils-sanitizeProducts.js';
import {fetchProductsData,loaderEl, remove_loaderEl, displayBestSellerTitle, displayFilters,filterByPrice,displayBestSellerInDOM, displayProductsInDOM,displayFilteredProductsInDOM,displayFilterByPriceBtns,filterProductBySearch, filterProductBySearchButton} from './utils-functions.js'
import {addAlertMessage, generateCatalogueArticleHTMLEl,renderCartItemsInNav} from './utils-renderHTML-elments.js';


document.addEventListener('DOMContentLoaded', async()=>{
    // GOBLALES
    // update number of items in cart 
    let numberCartItem = 0
    let numberFavouriteItem  = 0
    let numberCartItemEl = document.getElementById('numCartItems')
    let modalCart = {};
    // get data from json 
    // const url = 'http://localhost:3000/products';
    // let productsList = await fetchProductsData(url)
    let productsList = productsData;

    loaderEl();
    let loadingProducts = setTimeout(()=>{
        remove_loaderEl() 
        getProductsData(productsList, numberCartItem,numberFavouriteItem, modalCart )
        displayBestSellerTitle()
        displayFilterByPriceBtns()
        clearTimeout(loadingProducts);
    }, 1200)
}

)
// GET DATA TO PRINT

const getProductsData = (productsList, numberCartItem,numberFavouriteItem, modalCart )=>{
    let myProductsSanitized = sanitizedProductsList(productsList)
    console.log(myProductsSanitized)

    // display products
    let categoriesTypes = document.querySelectorAll('.offcanvas-body ul li a')
    const articlesContainer = document.getElementById('articles-container')
    displayProductsInDOM(articlesContainer,myProductsSanitized, modalCart)

    // display bestSeller products
    const bestSellerContainer = document.getElementById('bestseller-container')
    displayBestSellerInDOM(bestSellerContainer, myProductsSanitized, modalCart)

    // MANAGE NAVIGATION FILTERS
    // display filtered products
    displayFilteredProductsInDOM(articlesContainer, categoriesTypes,myProductsSanitized, modalCart)

    // MANAGE SEARCH
    // search products
    const searchbar = document.getElementById('search-input');
    const searchbutton = document.getElementById('search-button');
    filterProductBySearchButton(searchbutton,searchbar, productsList,articlesContainer )
    filterProductBySearch(searchbar, productsList,articlesContainer )
    // MANAGE SORT FILTER
    // filter element
    const filterLowestPriceBtn = document.getElementById('filter-lowest-price');
    const filterHighestPriceBtn = document.getElementById('filter-highest-price');

    filterByPrice(myProductsSanitized, articlesContainer,filterLowestPriceBtn)
    filterByPrice(myProductsSanitized, articlesContainer, filterHighestPriceBtn)
}

// MANAGE DISPLAY CART MODAL 

// MANAGE UPDATE INFOS ON CART MODALE
