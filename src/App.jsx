import './App.css';
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimal() {
    const animals = ["bird", "cat", "dog", "horse", "gator", "cow"]

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])


    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    })

    return (
        <div className="app">
            <button onClick={handleClick}> Add animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}


export default App
