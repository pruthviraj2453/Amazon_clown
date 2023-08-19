export const initialState = {
    basket :[],
    user : null,
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer = (state,  action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            //Logic
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":

        let newBasket = [...state.basket];
        const index = newBasket.findIndex((basketItem)=> basketItem.id===action.id);
        if(index>=0){
            //remove the item
            newBasket.splice(index,1);
        }
            return {
                ...state,
                basket : newBasket
            }
        default:
            return state;
    }
}

export default reducer;