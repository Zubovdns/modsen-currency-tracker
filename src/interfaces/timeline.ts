export interface TimelineOnePeriod {
  time_period_start: string
  time_period_end: string
  time_open: string
  time_close: string
  price_open: number
  price_high: number
  price_low: number
  price_close: number
  volume_traded: number
  trades_count: number
}

export interface TimelinePeriod {
  [key: string]: TimelineOnePeriod[]
}

export interface TimelineCurrencyTo {
  [key: string]: TimelinePeriod
}

export interface TimelineInitialState {
  currency: { [key: string]: TimelineCurrencyTo }
  status: string
}

export interface ArgumentsFetchTimelineData {
  periodId: string
  currencyTo: string
  baseCurrency: string | undefined
}

export interface ReturnsFetchTimelineData {
  [key: string]: TimelineCurrencyTo
}
