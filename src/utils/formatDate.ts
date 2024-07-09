import { format, isValid, parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale'

export const formatDate = (inputDate?: string) => {
  if (!inputDate) return ''

  const date = parseISO(inputDate)

  if (!isValid(date)) return 'Invalid Date'

  return format(date, 'd MMMM, h:mm a', { locale: enGB })
}
