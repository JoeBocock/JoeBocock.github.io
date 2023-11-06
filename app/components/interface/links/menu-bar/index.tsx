import { CodePen, Email, Github, LinkedIn, CV } from '@/app/components/svgs'
import { ButtonWithLight } from '../button-with-light'

export function MenuBar() {
  return (
    <div className="flex">
      <ButtonWithLight link="Joe-Bocock-Resume.pdf" title="Resume">
        <CV classes="w-6 h-6" />
      </ButtonWithLight>
      <ButtonWithLight link="mailto:joebocock@gmail.com" title="Email">
        <Email classes="w-6 h-6" />
      </ButtonWithLight>
      <ButtonWithLight link="https://github.com/joebocock" title="Github">
        <Github classes="w-6 h-6" />
      </ButtonWithLight>
      <ButtonWithLight
        link="https://www.linkedin.com/in/joebocock/"
        title="LinkedIn"
      >
        <LinkedIn classes="w-6 h-6" />
      </ButtonWithLight>
      <ButtonWithLight link="https://codepen.io/joebocock" title="CodePen">
        <CodePen classes="w-6 h-6" />
      </ButtonWithLight>
    </div>
  )
}
