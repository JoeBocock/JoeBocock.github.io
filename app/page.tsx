'use client'

import styles from './styles.module.css'

import { Rocket } from './components/interactions/rocket'
import { Comma } from './components/interactions/comma/comma'
import Marquee from './components/interface/marquee'
import { Navigator } from './components/interface/navigator'
import { MenuBar } from './components/interface/links/menu-bar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={
          styles.crt +
          ' flex flex-col justify-between items-center h-[100vh] text-7xl xs:text-8xl sm:text-9xl p-4 lg:p-8'
        }
      >
        <div className={'text-xl flex ml-auto'}>
          <Navigator />
        </div>

        <div className={'md:max-w-[65%]'}>
          <div>
            HELLO
            <Comma /> <br />
            I&#39;M{' '}
            <span className={styles.flicker}>
              JOE
              <Rocket />
            </span>
          </div>

          <Marquee />
        </div>

        <div className={'links text-lg flex space-x-4'}>
          <MenuBar />
        </div>

        <div></div>
      </div>
    </main>
  )
}
