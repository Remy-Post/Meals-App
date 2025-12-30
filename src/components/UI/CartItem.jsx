// Cart item component with quantity controls
import { currencyFormatter } from "../../util/formatting.js";

// Displays a single item in the cart with increase and decrease buttons
export default function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
    return (
        <li className="cart-item">
            <p>{name} - {quantity} x {currencyFormatter.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}