import { FC } from 'react'
import { ToggleSwitch } from './styled'

export const ThemeSwitcher: FC = () => {
  return (
    <ToggleSwitch>
      <input type="checkbox" id="dark-mode-toggle" />
      <label htmlFor="dark-mode-toggle" className="switch"></label>
    </ToggleSwitch>
  )
}
