// Error message component for displaying error information
export default function Error({title, message}) {
    return <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
}