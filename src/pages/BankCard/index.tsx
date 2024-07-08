import { Component } from 'react'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { Mapbox } from '@components/Mapbox'
import { SearchBar } from '@components/SearchBar'
import { banks, currencyNames } from '@constants/map'

import { Props, State } from './types'

class BankCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedCurrency: '',
    }
  }

  handleSearch = (query: string) => {
    this.setState({ selectedCurrency: query })
  }

  render() {
    return (
      <ErrorBoundary>
        <SearchBar onSearch={this.handleSearch} suggestions={currencyNames} />
        <Mapbox banks={banks} selectedCurrency={this.state.selectedCurrency} />
      </ErrorBoundary>
    )
  }
}

export default BankCard
