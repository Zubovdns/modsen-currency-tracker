import { TimelinePoint } from '@interfaces/timeline'

import { Observable } from '.'

export const timelineObserver = new Observable<TimelinePoint[]>()
