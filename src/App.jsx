function App() {
    const handleClick = () => {
        alert("hi")
    }

    return (
        <div>
            <button onClick={handleClick}> Add animal</button>
        </div>
    )
}


export default App
