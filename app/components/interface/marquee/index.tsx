import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Spotify, Steam } from '../../svgs'
import { Loading } from '../../svgs/loading'

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

const games: string[] = [
  'Rust',
  'Warframe',
  'Counter-Strike: Source',
  'The Elder Scrolls V: Skyrim',
  'Fallout New Vegas',
  'Stardew Valley',
  "Baldur's gate 3",
  'Dayz',
  'Fallout 4',
  'Rimworld',

  'Old School Runescape',
  'Borderlands 2',
  'Cyberpunk 2077',
  'Mass Effect: Legendary Edition',
  'Project Zomboid',
  'Knights of the Old Republic',
  'Satisfactory',
  'Dead Cells',
  'Deep Rock Galactic',
  'The Witcher 3: Wild Hunt',

  'The Outer Worlds',
  'FTL: Faster Than Light',
  'Elite Dangerous',
  'King of Retail',
  'Fallout 3',
  'Fallout 4',
  'Middle-earth: Shadow of War',
  'Gunfire Reborn',
  'Game Dev Tycoon',
  'The Elder Scrolls IV: Oblivion',

  "No Man's Sky",
  'Divinity: Original Sin',
  'Mount & Blade II: Bannerlord',
  'Planet Zoo',
  'SMITE',
  'Prison Architect',
  'Kingdoms of Amalur: Reckoning',
  'Pillars of Eternity',
  'Terraria',
  'Undertale',

  'Hades',
  'Dwarf Fortress',
  'Tabletop Simulator',
  'Subnautica',
  'Factorio',
  'Stellaris',
  'Risk of Rain 2',
  'Monster Hunter: World',
  'Path of Exile',
  'Grounded',

  'Coral Island',
  'Portal 2',
  'Wasteland 2',
  'Darkest Dungeon',
  'Project Highrise',
  'Dark Souls 3',
  'Sekiro: Shadows Die Twice',
  'XCOM: Enemy Unknown',
  'Ultimate Chicken Horse',
  'Vampire Survivors',
]

export default function Marquee() {
  const [song, setSong] = useState<string>('Loading...')
  const [game, setGame] = useState<string>('Loading...')
  const [type, setType] = useState<string>('loading')

  useEffect(() => {
    setSong(songs[new Date().getMinutes()] ?? songs[0])
    setGame(games[new Date().getMinutes()] ?? games[0])
    setType(Math.floor(Math.random() * 2) == 0 ? 'song' : 'game')
  }, [])

  return (
    <div className={'flex w-[16rem] xs:w-[24rem] sm:w-[28rem] md:w-[29rem]'}>
      <button
        onClick={() => setType(type === 'song' ? 'game' : 'song')}
        className={'min-w-fit'}
      >
        {type === 'loading' && <Loading classes={'w-12 h-12'} />}
        {type === 'song' && <Spotify classes={'w-12 h-12'} />}
        {type === 'game' && <Steam classes={'w-12 h-12'} />}
      </button>

      <div
        className={
          styles.marquee +
          ' bg-white text-black rounded-md marquee my-auto ml-4 italic'
        }
      >
        <ul className={styles.content}>
          <li>&#91;{type === 'song' ? song : game}&#93;</li>
          <li>&nbsp;&nbsp;</li>
        </ul>

        <ul aria-hidden={true} className={styles.content}>
          <li>&#91;{type === 'song' ? song : game}&#93;</li>
          <li>&nbsp;&nbsp;</li>
        </ul>
      </div>
    </div>
  )
}
