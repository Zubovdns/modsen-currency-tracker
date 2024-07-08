export type Props = {
  onSearch: (query: string) => void
  suggestions: { [key: string]: string }
}

export type State = {
  query: string
  filteredSuggestions: string[]
  showSuggestions: boolean
}
