// Individual meal item card with image, details, and add to cart button
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'
import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';

// Displays a single meal with image, name, price, and description
export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);

    // Adds the meal to the shopping cart
    function handleAddMealToCart() {
        cartCtx.addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                // Backend URL for meal images
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}