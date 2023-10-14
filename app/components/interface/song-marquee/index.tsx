import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Spotify } from '../../svgs'

const songs: string[] = [
    'Lisbon - Slim & The Beast',
    'Tinder Samurai - Samsa',
    'The Reckless and the Brave - All Time Low',
    'Myself - Post Malone',
    'Day 39/167 - Fran Vasilić',
    'At the Cookout - Akintoye',
    'Dancing Queen - ABBA',
    'Iris - The Goo Goo Dolls',
    'Upside Down - Jack Johnson',
    'Shut up My Moms Calling - Hotel Ugly',

    'Sprinter - Dave, Central Cee',
    'Paradise - Briston Maroney',
    'Late July - Zach Bryan',
    "Stacy's Mom - Fountains Of Wayne",
    'Teenage Dirtbag - Wheatus',
    'In Too Deep - Sum 41',
    'Musta Been a Ghost - Próxima Parada',
    'Glimpse of Us - Joji',
    'Corner - Aloe Blacc',
    'Would That I - Hozier',

    'Shit Show - Pater McPoland',
    'Runaway - AURORA',
    'A-O-K - Tai Verdes',
    'Kids - MGMT',
    'Ready - Kodaline',
    'Hey, Ma - Bon Iver',
    'Run - Joji',
    '3 Nights - Dominic Fike',
    'Blueberry Faygo - Lil Mosey',
    'Be Around Me - Will Joseph Cook',

    'MONTERO - Lis Nas X',
    'Fed Up - Justin Starling',
    'June Blues - Eric Reprid',
    'Moonlight - XXXTENTACION',
    'Young Volcanoes - Fall Out Boy',
    'The Mighty Fall - Fall Out Boy',
    "America's Suitehearts - Fall Out Boy",
    'The (Shipped) Gold Standard - Fall Out Boy',
    '20 Dollar Nose Bleed - Fall Out Boy',
    'Lake Effect Kid - Fall Out Boy',

    'ATTENTION - Joji',
    'Sanctuary - Joji',
    'Unity - TheFatRat',
    'Saint Bernard - Lincoln',
    'Inferno - HEX',
    'Bohemian Rhapsody - Queen',
    'ABC - The Jackson 5',
    'Hey Ya! - Outkast',
    'Ocean Man - Ween',
    'Stay Frosty Royal Milk Tea - Fall Out Boy',

    'Sunshine Riptide - Fall Out Boy',
    "Hollywood's Bleeding - Post Malone",
    'Bad Guy - Alex Holtti',
    'Let Go Of The Wheel - Mako',
    'Small Talk - Kid Quill',
    'Sunflower Seeds - Bryce Vine',
    'Think About Things - Daði Freyr',
    'Not Dead Yet - Jakey',
    'Promise - Ben Howard',
    'Cigarette Daydreams - Cage The Elephant',
]

function Song(): string {
    const [song, setSong] = useState<string>('Loading...')

    useEffect(() => {
        setSong(songs[new Date().getMinutes()] ?? songs[0])
    }, [])

    return song
}

export default function SongMarquee() {
    const song: string = Song()

    return (
        <div
            className={'flex w-[16rem] xs:w-[24rem] sm:w-[28rem] md:w-[29rem]'}
        >
            <div className={'min-w-fit'}>
                <Spotify classes={'w-12 h-12'} />
            </div>

            <div
                className={
                    styles.marquee +
                    ' bg-white text-black rounded-md marquee my-auto ml-4 italic'
                }
            >
                <ul className={styles.content}>
                    <li>&#91;{song}&#93;</li>
                    <li>&nbsp;&nbsp;</li>
                </ul>

                <ul aria-hidden={true} className={styles.content}>
                    <li>&#91;{song}&#93;</li>
                    <li>&nbsp;&nbsp;</li>
                </ul>
            </div>
        </div>
    )
}
