export type Props = Record<string, never>

export interface Field {
  o: string
  h: string
  l: string
  c: string
}

export type State = {
  date: string
  fields: Field[]
}
