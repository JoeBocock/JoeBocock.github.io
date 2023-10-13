import { KeyboardEvent, useState } from 'react'

export function Search() {
    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    let commandPressed = false

    document.addEventListener('keydown', event => {
        if (!visible) {
            if (event.key === 'Meta' || event.key === 'Control') {
                commandPressed = true
            }

            if (commandPressed && event.key === 'k') {
                show()
            }
        }

        if (visible && event.key === 'Escape') {
            hide()
        }
    })

    document.addEventListener('keyup', event => {
        if (event.key === 'Meta' || event.key === 'Control') {
            commandPressed = false
        }
    })

    return (
        <span>
            <span
                className={
                    'bg-white text-black py-2 px-3 rounded-md cursor-pointer z-20'
                }
                onClick={show}
            >
                Search...{' '}
                <span
                    className={
                        'my-auto bg-black text-white py-1 px-2 rounded-md font-sans text-base'
                    }
                >
                    ⌘K
                </span>
            </span>
            <div
                className={
                    visible
                        ? 'absolute top-0 left-0 w-screen h-screen bg-black opacity-70 z-30'
                        : 'hidden'
                }
                onClick={hide}
            ></div>
            {visible && (
                <div
                    className={
                        'flex flex-col absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'
                    }
                >
                    <div
                        className={
                            'bg-black rounded-md p-4 w-1/3 outline outline-slate-600 w-[16rem] xs:w-[18rem] sm:w-[25rem]'
                        }
                    >
                        <input
                            autoFocus
                            className={'w-full p-2 outline-none bg-black'}
                            type="text"
                            placeholder="Blog..."
                        ></input>
                    </div>
                </div>
            )}
        </span>
    )
}
