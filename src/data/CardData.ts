export interface Action {
  label: string
  icon: string
  url: string
}

export interface CardData {
  title: string
  description: string
  action: Array<Action>
  fold?: { label: string; content: string }
  target?: '_blank' | '_self'
}

export interface ImageCardData {
  title: string
  url: string
  action: Array<Action>
  fold?: { label: string; content: string }
}
