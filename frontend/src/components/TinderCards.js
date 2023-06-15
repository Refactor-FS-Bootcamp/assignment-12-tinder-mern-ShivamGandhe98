import { useState, useEffect } from "react"
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from "axios";

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('https://tinderbackend-shivamgandhe2.b4a.run/tinder/cards')
            setPeople(req.data);
        }
        fetchData()
    },[])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                {people.map((person) => (
                    <TinderCard className="swipe" onSwipe={onSwipe} key={person.name} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
