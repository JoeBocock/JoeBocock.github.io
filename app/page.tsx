'use client'

import { Rocket } from './components/interactions/rocket'
import { Comma } from './components/interactions/comma/comma'
import { CodePen, Email, Github, LinkedIn } from './components/svgs'
import SongMarquee from './components/interface/song-marquee'
import { Search } from './components/interface/search/search'

export default function Home() {
    return (
        <main>
            <div
                className={
                    'flex flex-col justify-between items-center h-[100vh] text-7xl xs:text-8xl sm:text-9xl crt p-4 lg:p-8'
                }
            >
                <div className={'text-xl flex ml-auto'}>
                    <Search />
                </div>

                <div className={'md:max-w-[65%]'}>
                    <div>
                        HELLO
                        <Comma /> <br />
                        I&#39;M{' '}
                        <span className={'flicker'}>
                            JOE
                            <Rocket />
                        </span>
                    </div>

                    <SongMarquee />
                </div>

                <div className={'links text-lg flex space-x-4'}>
                    <a
                        className={'opacity-30 hover:opacity-100'}
                        href={'mailto:joebocock@gmail.com'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        <Email classes={'w-8 h-8'} />
                    </a>
                    <a
                        className={'opacity-30 hover:opacity-100'}
                        href={'https://github.com/joebocock'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        <Github classes={'w-8 h-8'} />
                    </a>
                    <a
                        className={'opacity-30 hover:opacity-100'}
                        href={
                            'https://www.linkedin.com/in/joe-bocock-976341181/'
                        }
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        <LinkedIn classes={'w-8 h-8'} />
                    </a>
                    <a
                        className={'opacity-30 hover:opacity-100'}
                        href={'https://codepen.io/joebocock'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        <CodePen classes={'w-8 h-8'} />
                    </a>
                </div>

                <div></div>
            </div>
        </main>
    )
}
