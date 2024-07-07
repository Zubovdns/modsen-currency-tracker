import { format, parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale'

export const formatDate = (inputDate?: string) => {
  if (!inputDate) return ''

  const date = parseISO(inputDate)

  return format(date, 'd MMMM, h:mm a', { locale: enGB })
}
