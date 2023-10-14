import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react'

export function Rocket() {
    const [showResults, setShowResults] = useState(false)
    let timeout = null

    const onClick = () => {
        setShowResults(true)
        timeout = setTimeout(() => {
            setShowResults(false)
        }, 5000)
    }

    return (
        <span>
            <span className={'select-none cursor-pointer'} onClick={onClick}>
                .
            </span>
            <div className={showResults ? styles.flying : 'hidden'}>
                <Image
                    src={'/gifs/rocket.gif'}
                    alt={'Pixel art rocket'}
                    width={84}
                    height={84}
                    className={styles.pixelated}
                />
            </div>
        </span>
    )
}
