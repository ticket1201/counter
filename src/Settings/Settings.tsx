import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from '../Button/Button';

type SettingPropsType = {
    startValue: number
    maxValue: number
    isChanged: boolean
    changeStatus: () => void
    changeStartCountHandler: (newValue: number) => void
    changeMaxCountHandler: (newValue: number) => void
    error: boolean
    setError: (error:boolean) => void
}

const Settings = (props: SettingPropsType) => {

    const [localMaxValue, setLocalMaxValue] = useState(props.maxValue)
    const [localStartValue, setLocalStartValue] = useState(props.startValue)

    useEffect(() => {
        errorHandler()
    })


    const errorHandler = () => {
        if(localMaxValue <= localStartValue){
            props.setError(true)
        }
        else if(localMaxValue < 0 || localStartValue<0){
            props.setError(true)
        }
        else props.setError(false)
    }


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalMaxValue(+e.currentTarget.value)
        if (!props.isChanged) {
            props.changeStatus()
        }
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(+e.currentTarget.value)
        if (!props.isChanged) {
            props.changeStatus()
        }
    }

    const setNewValues = () => {
        props.changeStartCountHandler(localStartValue)
        props.changeMaxCountHandler(localMaxValue)
        if (props.isChanged) {
            props.changeStatus()
        }
    }

    const setInputClass = (value:number) => {
        if(localMaxValue <= localStartValue){
            return s.error
        }
        return value < 0 ? s.error : '';
    }

    return (
        <div className={'inner'}>
            <div className={s.settingWrapper}>
                <div className={s.inputWrapper}>
                    <label htmlFor={'max'}>Max Value:</label>
                    <input type="number" id={'max'} value={localMaxValue} onChange={onChangeMaxHandler}
                           className={setInputClass(localMaxValue)}/>
                </div>
                <div className={s.inputWrapper}>
                    <label htmlFor={'min'}>Start Value:</label>
                    <input type="number" id={'min'} value={localStartValue} onChange={onChangeStartHandler}
                           className={setInputClass(localStartValue)}/>
                </div>

            </div>
            <div className={'buttons_wrapper'}>
                <Button class={'button'} name={'Set'} callback={setNewValues}
                        isDisabled={props.error || !props.isChanged}/>
            </div>
        </div>

    );
};

export default Settings;