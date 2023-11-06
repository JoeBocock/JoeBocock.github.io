import styles from './styles.module.css'
import { ReactElement, useState } from 'react'

type ButtonWithLightProps = {
  children: ReactElement
  link: string
  title: string
}

export function ButtonWithLight({
  children,
  link,
  title,
}: ButtonWithLightProps) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className={styles.container}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className={styles.button}
        onClick={() => setClicked(true)}
        title={title}
      >
        {children}
      </a>
      <div className={clicked ? styles.green : styles.red}></div>
    </div>
  )
}
