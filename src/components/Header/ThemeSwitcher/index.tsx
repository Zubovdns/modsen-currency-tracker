import { DARK, LIGHT } from '@constants/theme'
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks'
import { themeMode } from '@store/selectors/themeSelectors'
import { setTheme } from '@store/slices/themeSlice'
import { FC, useState } from 'react'
import { TSInput, TSLabel, ToggleSwitch } from './styled'

export const ThemeSwitcher: FC = () => {
  const theme = useAppSelector(themeMode)
  const dispatch = useAppDispatch()

  const [checked, setChecked] = useState(theme === LIGHT)
  const handleChange = () => {
    dispatch(setTheme(checked ? DARK : LIGHT))
    setChecked((prev) => !prev)
  }

  return (
    <ToggleSwitch>
      <TSInput
        type="checkbox"
        id="dark-mode-toggle"
        checked={checked}
        onChange={handleChange}
      />
      <TSLabel htmlFor="dark-mode-toggle"></TSLabel>
    </ToggleSwitch>
  )
}
