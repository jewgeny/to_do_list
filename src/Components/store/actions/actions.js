export const addWish = (ev) => {
    return{
        type: "ADDWISH",
        ev: ev
    }
}

export const changeValTxt = (ev) => {
    return{
        type: "CHANGEVALTXT",
        ev: ev
    }
}

export const deleteWish = (ev) => {
    return{
        type: "DELETEWISH",
        ev: ev
    }
}

export const addToWishList = (ev) => {
     return{
         type: "ADDTOWISHLIST",
         ev: ev
     }
}

export const deleteWishListItem = (ev) => {
    return{
        type: "DELETEWISHLISTITEM",
        ev: ev
    }
}