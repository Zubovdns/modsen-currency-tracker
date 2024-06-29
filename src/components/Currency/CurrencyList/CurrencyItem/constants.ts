import australianDollarIcon from '@assets/icons/australianDollarIcon.svg'
import bitcoinIcon from '@assets/icons/bitcoinIcon.svg'
import canadianDollarIcon from '@assets/icons/canadianDollarIcon.svg'
import dollarIcon from '@assets/icons/dollarIcon.svg'
import euroIcon from '@assets/icons/euroIcon.svg'
import libraIcon from '@assets/icons/libraIcon.svg'
import pesoArgentinaIcon from '@assets/icons/pesoArgentinaIcon.svg'
import wonIcon from '@assets/icons/wonIcon.svg'
import yenIcon from '@assets/icons/yenIcon.svg'

export const currencyNames: { [key: string]: string } = {
  BTC: 'Bitcoin',
  USD: 'US Dollar',
  EUR: 'Euro',
  ARS: 'Argentine Peso',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  GBP: 'British Pound',
}

export const currencyImages: { [key: string]: string } = {
  BTC: bitcoinIcon,
  USD: dollarIcon,
  EUR: euroIcon,
  ARS: pesoArgentinaIcon,
  JPY: yenIcon,
  CNY: wonIcon,
  AUD: australianDollarIcon,
  CAD: canadianDollarIcon,
  GBP: libraIcon,
}
