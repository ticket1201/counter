import React, {useEffect, useState} from 'react';
import {Scoreboard} from './Scoreboard/Scoreboard';
import {Button} from '../Button/Button';

type CountPropsType = {
    startCount: number
    maxCount: number
    isChanged: boolean
    error: boolean
}


const Count = (props:CountPropsType) => {

    useEffect( () => {
        setCurrentCount(props.startCount)
    }, [props.startCount])



    const [currentCount, setCurrentCount] = useState<number>(props.startCount)

    const buttonIncHandler = () => {
        if (currentCount < props.maxCount) {
            setCurrentCount(currentCount + 1)
        }
    }

    const buttonResetHandler = () => {
        setCurrentCount(props.startCount)
    }

    return (
        <div className={'inner'}>
            <Scoreboard count={currentCount} maxScore={props.maxCount} isChanged={props.isChanged} error={props.error}/>
            <div className={'buttons_wrapper'}>
                <Button isDisabled={props.isChanged || currentCount === props.maxCount} class={'button'} name={'Inc'} callback={buttonIncHandler}/>
                <Button isDisabled={props.isChanged || currentCount === props.startCount} class={'button'} name={'Reset'}
                        callback={buttonResetHandler}/>
            </div>
        </div>
    );
};

export default Count;