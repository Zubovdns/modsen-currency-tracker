import { Component } from 'react'

import {
  SearchContainer,
  SearchInput,
  SuggestionItem,
  SuggestionsList,
} from './styled'
import { Props, State } from './types'

export const SearchBar = class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      query: '',
      filteredSuggestions: [],
      showSuggestions: false,
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { suggestions } = this.props
    const query = event.target.value
    const filteredSuggestions = Object.keys(suggestions).filter((key) =>
      key.toLowerCase().includes(query.toLowerCase())
    )

    this.setState({
      query,
      filteredSuggestions,
      showSuggestions: query.length > 0,
    })
  }

  handleSuggestionClick = (suggestion: string) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    })
    this.props.onSearch(this.props.suggestions[suggestion])
  }

  render() {
    const { query, filteredSuggestions, showSuggestions } = this.state

    return (
      <SearchContainer data-testid="bank-search">
        <SearchInput
          type="text"
          placeholder="Currency search..."
          value={query}
          onChange={this.handleInputChange}
        />
        {showSuggestions && (
          <SuggestionsList>
            {filteredSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onClick={() => this.handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchContainer>
    )
  }
}
