import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './Scoreboard/Scoreboard';
import {Button} from './Button/Button';



function App() {

    const startCount = 0
    const maxCount = 5

    const [score, setScore] = useState<number>(startCount)

    const buttonIncHandler = () => {
        if (score < maxCount) {
            setScore(score + 1)
        }
    }

    const buttonResetHandler = () => {
        setScore(0)
    }



    return (
        <div className="App">
            <Scoreboard score={score} maxScore={maxCount}/>
            <div className={'buttons_wrapper'}>
                <Button isDisabled={score === maxCount} class={'button'} name={'Inc'} callback={buttonIncHandler}/>
                <Button isDisabled={score === startCount} class={'button'} name={'Reset'}
                        callback={buttonResetHandler}/>
            </div>
        </div>
    );
}

export default App;
