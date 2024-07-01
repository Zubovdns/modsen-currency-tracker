import { FC } from 'react'
import { TSInput, TSLabel, ToggleSwitch } from './styled'

export const ThemeSwitcher: FC = () => {
  return (
    <ToggleSwitch>
      <TSInput type="checkbox" id="dark-mode-toggle" />
      <TSLabel htmlFor="dark-mode-toggle"></TSLabel>
    </ToggleSwitch>
  )
}
