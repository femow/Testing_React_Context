import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const indexItem = state.items.findIndex(el => el.id === action.item.id);
        let newItem;
        let updatedItems;
        if(indexItem > -1) {
            newItem = {...state.items[indexItem]};
            newItem.count += 1;
            updatedItems = [...state.items];
            updatedItems[indexItem] = newItem;
        }
        else {
            newItem = {...action.item, count: 1};
            updatedItems = [newItem, ...state.items];
        }

        const updatedTotalAmount = state.totalAmount + newItem.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if(action.type === 'REMOVE') {
        const indexItem = state.items.findIndex(el => el.id === action.id);
        let newItem = {...state.items[indexItem]};
        let updatedItems;
        if(newItem.count === 1) {
            updatedItems = state.items.filter(item => item.id !== newItem.id);
        }
        else {
            updatedItems = [...state.items]
            newItem.count--;
            updatedItems[indexItem] = newItem;
        }
        const updatedTotalAmount = state.totalAmount - newItem.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState
}

const CartProvider = props => {
    const [cartState, dispatchAction] = useReducer(CartReducer, defaultState);

    const addCartHandler = item => {
        dispatchAction({
            type: 'ADD',
            item: item
        })
    }

    const removeCartHandler = id => {
        dispatchAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        onAddCart: addCartHandler,
        onRemoveCart: removeCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;