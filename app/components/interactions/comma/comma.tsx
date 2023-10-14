import styles from './styles.module.css'
import { useState } from 'react'

const enum State {
    Idle,
    Shaking,
    Falling,
}

export function Comma() {
    const [timesClicked, setTimesClicked] = useState(0)
    const [state, setState] = useState(State.Idle)

    const classNames = () => {
        if (state === State.Falling) {
            return `${styles.default} ${styles.falling}`
        }

        return state ? `${styles.default} ${styles.shaking}` : styles.default
    }

    const onClick = () => {
        if (timesClicked > 2) {
            setState(State.Falling)

            return
        }

        setTimesClicked(timesClicked + 1)
        setState(State.Shaking)
        setTimeout(() => setState(State.Idle), 300)
    }

    return (
        <span className={classNames()} onClick={onClick}>
            ,
        </span>
    )
}
