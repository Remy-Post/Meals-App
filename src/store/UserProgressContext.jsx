// Context for tracking user progress through cart and checkout flow
import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
});

// Provider component for user progress context
function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    // Sets progress to show cart modal
    function showCart() {
        setUserProgress('cart');
    }

    // Clears progress to hide cart modal
    function hideCart() {
        setUserProgress('');
    }

    // Sets progress to show checkout modal
    function showCheckout() {
        setUserProgress('checkout');
    }

    // Clears progress to hide checkout modal
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
