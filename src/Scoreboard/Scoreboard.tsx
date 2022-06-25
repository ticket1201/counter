import React from 'react';

import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    score: number
    maxScore: number
}

export const Scoreboard = (props: ScoreboardPropsType) => {
    const setScoreClassName = () => {
        return (props.score === props.maxScore) ? s.red : '';
    }

    return (
        <div className={s.main}>
            <p className={setScoreClassName()}>{props.score}</p>
        </div>
    );
};

