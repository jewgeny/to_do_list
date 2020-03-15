const initialState = {
    wishes: [],
    wishlist: [],
    txtValue: "",
    copyTxtValue: ""
}

export const reducer = (state = initialState, action) => {
      
       let copyOfStates = {...state};

       switch(action.type){

        case "ADDWISH":
            let ObjectOfWishes = {
                wishes: copyOfStates.txtValue
            }

            copyOfStates.copyTxtValue = copyOfStates.txtValue;
            
            if(copyOfStates.txtValue !== ""){
                copyOfStates.wishes = [...copyOfStates.wishes, ObjectOfWishes];
            }
           

            copyOfStates.txtValue = "";

           return copyOfStates;

        case "DELETEWISH":
           let deleteWish = action.ev;
           copyOfStates.wishes = copyOfStates.wishes.filter(elem => elem.wishes !== deleteWish);
            console.log("delete wish", copyOfStates.wishes);
          return copyOfStates;

        case "CHANGEVALTXT":
            copyOfStates.txtValue = action.ev.target.value;
            return copyOfStates;
        
        case "ADDTOWISHLIST":
            let ulElement = document.querySelector("#ulWishes");
            let liElement = document.createElement("li");
            //liElement.innerHTML = `${copyOfStates.copyTxtValue}`;
            liElement.classList.add("moveToList");
           
           let wish = action.ev;
           let indexOfcheckBox = copyOfStates.wishes.findIndex( elem => elem.wishes === wish);
               
           liElement.innerHTML = `${copyOfStates.wishes[indexOfcheckBox].wishes}`;
         
           let ObjectOfWishList = {
               wishes: wish
           }

           let allCheckBoxes = document.querySelectorAll("#check");
          
           console.log(allCheckBoxes[indexOfcheckBox]);
           if(allCheckBoxes[indexOfcheckBox].checked === true){
              copyOfStates.wishlist = [...copyOfStates.wishlist, ObjectOfWishList];
              ulElement.appendChild(liElement);
              setTimeout(() => {
                  liElement.parentNode.removeChild(liElement);
              }, 1000)
           }
           else{
              copyOfStates.wishlist = copyOfStates.wishlist.filter(elem => elem.wishes !== wish);
           }

           return copyOfStates;

        
        case "DELETEWISHLISTITEM":
           let deleteWishListItem = action.ev;
           console.log(deleteWishListItem)
           copyOfStates.wishlist = copyOfStates.wishlist.filter(elem => elem.wishes !== deleteWishListItem);
           return copyOfStates;


          default:
              return copyOfStates;
       }

}

