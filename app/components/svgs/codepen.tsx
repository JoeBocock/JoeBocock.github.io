import { ClassesProps } from '@/app/types'

export function CodePen({ classes }: ClassesProps) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(0 0 0) scale(1.05 0.8)"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
      <line x1="12" y1="22" x2="12" y2="15.5"></line>
      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
      <line x1="12" y1="2" x2="12" y2="8.5"></line>
    </svg>
  )
}
