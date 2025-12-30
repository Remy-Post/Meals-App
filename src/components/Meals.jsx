// Component that fetches and displays the list of available meals
import useHttp from '../hooks/useHttp.js'
import MealItem from './MealItem.jsx'
import Error from './Error.jsx'

const requestConfig = {}

// Fetches meals from the backend and displays them in a grid
export default function Meals() {
    // API endpoint for fetching available meals
    const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, [])

    if (isLoading) {
        return <p className="center">Loading Meals...</p>
    }

    if (error) {
        return <Error title={error.title} message={error} />
    }

    return (<ul id="meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
    </ul>)
}