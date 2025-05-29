import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
});

function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    return (
        <UserProgressContext.Provider value={{
            progress: userProgress,
            showCart,
            hideCart,
            showCheckout,
            hideCheckout,
        }}>
            {children}
        </UserProgressContext.Provider>
    )
}

export { UserProgressContextProvider };
export default UserProgressContext;
