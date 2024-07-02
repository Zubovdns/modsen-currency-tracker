import { commonTheme } from './commonTheme'

export const darkTheme = {
  ...commonTheme,
  name: 'dark',
  body: '#030304',

  navbarLinks: '#FFFFFF',

  togglerBackground: '#FFFFFF',
  togglerColor: '#000000',

  titleGradientBackground:
    'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
  titleSubText: '#d9d9d9',

  statusColor: '#d9d9d9',

  footerSubTextColor: '#FFFFFF',
  footerLinkColor: '#888',
  footerLinkHoverColor: '#fff',
  footerLabelLinkColor: '#FFFFFF',
  footerCreditsColor: '#898989',
  footerLinksDivBorderColor: '#545454',

  modalWrapBackground: 'rgba(0, 0, 0, 0.5)',
  modalBackground: '#202025',
  modalBoxShadow: 'rgba(0, 0, 0, 0.1)',
  modalBorderColor: '#474747',

  currencyItemTitleBorderColor: '#545454',
  currencyItemTitleColor: '#d9d9d9',
  currencyItemBorderColor: '#474747',
  currencyItemBackground: '#202025',
  currencyItemNameColor: '#d9d9d9',
  currencyItemValueColor: '#a7b2c3',

  modalItemLabelColor: '#d9d9d9',
  modalItemValueColor: '#a7b2c3',
  modalItemImageBorderColor: '#A7B2C3',
  modalItemImageBorderSelectedColor: '#D9D9D9',

  pageLoaderColor: '#fff',

  pageFallbackColor: '#fff',
}
