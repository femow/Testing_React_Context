import { createContext } from 'react'

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    onAddCart: () => {},
    onRemoveCart: id => {}
});

export default CartContext;