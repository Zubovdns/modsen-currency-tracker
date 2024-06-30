export const formatDate = (inputDate?: string) => {
  if (!inputDate) return ''

  const date = new Date(inputDate)

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }

  return new Intl.DateTimeFormat('en-GB', options).format(date)
}
