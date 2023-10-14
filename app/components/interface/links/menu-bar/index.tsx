import { CodePen, Email, Github, LinkedIn } from '@/app/components/svgs'
import { ButtonWithLight } from '../button-with-light'

export function MenuBar() {
    return (
        <div className="flex">
            <ButtonWithLight link="mailto:joebocock@gmail.com" title="Email">
                <Email classes="w-7 h-7" />
            </ButtonWithLight>
            <ButtonWithLight link="https://github.com/joebocock" title="Github">
                <Github classes="w-7 h-7" />
            </ButtonWithLight>
            <ButtonWithLight
                link="https://www.linkedin.com/in/joe-bocock-976341181/"
                title="LinkedIn"
            >
                <LinkedIn classes="w-7 h-7" />
            </ButtonWithLight>
            <ButtonWithLight
                link="https://codepen.io/joebocock"
                title="CodePen"
            >
                <CodePen classes="w-7 h-7" />
            </ButtonWithLight>
        </div>
    )
}
