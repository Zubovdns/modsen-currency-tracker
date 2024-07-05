export interface TimelineInitialState {
  currency: TimelinePoint[]
}

export type TimelinePoint = number | [number, number] | null
