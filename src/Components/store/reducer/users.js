const initialState = {
    text: "Das ist nur ein Test",
    allUsers: [],
    showUsers: false
}

export const users = (state = initialState, action) => {
     const copyOfStates = {...state};

     switch(action.type){
          case "SHOWTEXT":
          console.log(copyOfStates.text);
          return copyOfStates;

          case "RECIEVEPOSTS":
          copyOfStates.allUsers = action.payload;
          copyOfStates.showUsers = true;
          console.log("hello all users")
          return copyOfStates;

          default:
              return copyOfStates;

     }
}
