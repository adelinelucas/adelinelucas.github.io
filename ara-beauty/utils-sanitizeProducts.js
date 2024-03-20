
const isCategoryError = (product) =>{
    let isIndexString = product.category.filter((idx) => typeof idx !== 'string')
    const condition_erreur = [
        product.category.length === 0,
        isIndexString.length != 0
    ];
    return condition_erreur.includes(true);
}

const isTitleError = (product) =>{
    const condition_erreur = [
        product.title.length === 0,
        typeof product.title != "string",
    ];
    return condition_erreur.includes(true);
}

const isBrandError = (product) =>{
    const condition_erreur = [
        product.brand.length === 0,
        typeof product.brand != "string",
    ];
    return condition_erreur.includes(true);
}

const isImageError = (product) =>{
    const condition_erreur = [
        product.img.length === 0,
        typeof product.img != "string",
    ];
    return condition_erreur.includes(true);
}

const isPriceError = (product) =>{
    const condition_erreur = [
        product.price <= 0,
        typeof product.price != "number",
    ];
    return condition_erreur.includes(true);
}

const isStockAvailable = (product) =>{
    const condition_erreur = [
        product.stockQuantity < 0,
        typeof product.stockQuantity != "number",
    ];
    return condition_erreur.includes(true);
}

export const sanitizedProductsList = (productsArray) =>{
    let sanitizedProductsArray = [];
    sanitizedProductsArray = productsArray.filter((product) =>{
        const conditionsToCheck = [
            isCategoryError(product),
            isTitleError(product),
            isBrandError(product),
            isImageError(product),
            isPriceError(product),
            isStockAvailable(product)
        ]
        return ! (conditionsToCheck.includes(true))
    })
    return sanitizedProductsArray;
}


