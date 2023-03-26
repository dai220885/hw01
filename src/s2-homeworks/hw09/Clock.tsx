import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    localStorage.setItem('hw9-date',  JSON.stringify(Date.now()))
    let options  = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
   let options2 = { month: 'numeric', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short', timeZone: 'UTC' }

    //let testDate = (new Date())
    //console.log((new Date().getHours()))
    //console.log(testDate.toLocaleString("ru", {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}))
    //console.log((new Date(Date.now())))
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    //const stateAsString = JSON.stringify(state)
    //console.log(timerId)
    //let tmrID: any;

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        // tmrID = setInterval(() => {
        //     let nowDate = Date.now()
        //     setDate(new Date(nowDate));
        //     setTimerId(nowDate)
        // }, 1000);
        let tmrID: any = setInterval(() => {
            let nowDate = Date.now()
            setDate(new Date(nowDate));
        }, 1000);
        setTimerId(tmrID)
    }

    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)

        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = date.toLocaleString("en", {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false})
        ||'date->time'
        || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: 'numeric',})
        || 'date->date'
        || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = date.toLocaleString("en", {weekday: 'long'})
        ||'date->day'
        || <br/> // пишут студенты
    const stringMonth = date.toLocaleString("en", {month: 'long'})
        || 'date->month'
        || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен //+
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен //+
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
