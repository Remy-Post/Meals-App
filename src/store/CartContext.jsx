// Context for managing shopping cart state across the application
import { createContext, useReducer } from 'react'

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
})

// Reducer function for managing cart state changes
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            {
                const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
                const updatedItems = [...state.items];

                if (existingCartItemIndex > -1) {
                    const existingItem = state.items[existingCartItemIndex];
                    const updatedItem = {
                        ...existingItem,
                        quantity: existingItem.quantity + 1
                    }
                    updatedItems[existingCartItemIndex] = updatedItem;
                }
                else {
                    updatedItems.push({
                        ...action.item,
                        quantity: 1
                    })
                }
                return { ...state, items: updatedItems }
            }

        case 'REMOVE_ITEM':
            {
                const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
                const existingCartItem = state.items[existingCartItemIndex];
                const updatedItems = [...state.items];

                if (existingCartItem.quantity === 1) {
                    updatedItems.splice(existingCartItemIndex, 1);
                }
                else {
                    const updatedItem = {
                        ...existingCartItem,
                        quantity: existingCartItem.quantity - 1
                    }
                    updatedItems[existingCartItemIndex] = updatedItem;
                }
                return { ...state, items: updatedItems }
            }
        case 'CLEAR_CART':
            {
                return { ...state, items: [] }
            }
    }
}

// Provider component for cart context
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    const cartContext = {
        items: cart.items,
        addItem: (item) => dispatchCartAction({ type: 'ADD_ITEM', item }),
        removeItem: (id) => dispatchCartAction({ type: 'REMOVE_ITEM', id }),
        clearCart: () => dispatchCartAction({ type: 'CLEAR_CART' })
    }

    return (<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>)
}

export default CartContext
