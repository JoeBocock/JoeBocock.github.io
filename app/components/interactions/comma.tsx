import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Comma() {
    const [timesClicked, setTimesClicked] = useState(0)
    const [state, setState] = useState(0)

    const classNames = () => {
        if (state >= 2) {
            return 'inline-block select-none cursor-pointer falling'
        }

        return state
            ? 'inline-block select-none cursor-pointer shaking'
            : 'inline-block select-none cursor-pointer'
    }

    const onClick = () => {
        if (timesClicked > 2) {
            setState(2)

            return
        }

        setTimesClicked(timesClicked + 1)
        setState(1)
        setTimeout(() => setState(0), 300)
    }

    return (
        <span className={classNames()} onClick={onClick}>
            ,
        </span>
    )
}
