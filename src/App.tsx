import React, {useState} from 'react';
import './App.css';
import Settings from './Settings/Settings';
import Count from './Count/Count';



function App() {

    let StorageStartValue = localStorage.getItem('StartCount') || 0
    let StorageMaxValue = localStorage.getItem('MaxCount') || 5

    const [startCount, setStartCount] = useState<number>(+StorageStartValue)
    const [maxCount, setMaxCount] = useState<number>(+StorageMaxValue)
    const [isChanged, setIsChanged] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const changeStartCountHandler = (newValue: number) => {
        setStartCount(newValue)
        localStorage.setItem('StartCount', `${newValue}`)
    }
    const changeMaxCountHandler = (newValue: number) => {
        setMaxCount(newValue)
        localStorage.setItem('MaxCount', `${newValue}`)
    }

    const changeStatus = () => {
        setIsChanged(!isChanged)
    }


    return (
        <div className="App">
            <Settings
                startValue={startCount}
                maxValue={maxCount}
                changeMaxCountHandler={changeMaxCountHandler}
                changeStartCountHandler={changeStartCountHandler}
                isChanged={isChanged}
                changeStatus={changeStatus}
                error={error}
                setError={setError}
            />
            <Count
                error={error}
                startCount={startCount}
                maxCount={maxCount}
                isChanged={isChanged}/>
        </div>
    );
}

export default App;
