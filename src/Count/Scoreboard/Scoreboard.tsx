import React from 'react';

import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    count: number
    maxScore: number
    isChanged: boolean
    error: boolean
}

export const Scoreboard = (props: ScoreboardPropsType) => {
    const setScoreClassName = () => {
        return (props.count === props.maxScore) ? s.red : s.aqua;
    }

    const showingText = () => {
        if (props.error) {
            return <p className={`${s.text} ${s.red}`}>Incorrect value!</p>
        } else {
            return props.isChanged
                ? <p className={`${s.text} ${s.aqua}`}>Enter values and press 'set'</p>
                : <p className={setScoreClassName()}>{props.count}</p>
        }
    }


    return (
        <div className={s.main}>
            {showingText()}
        </div>
    );
};

