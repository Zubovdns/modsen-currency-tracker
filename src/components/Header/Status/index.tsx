import circleLastUpdate from '@assets/icons/circleLastUpdate.svg'
import { useAppSelector } from '@store/hooks/hooks'
import { currencies } from '@store/selectors/currenciesSelectors'
import { formatDate } from '@utils/formatDate'
import { FC } from 'react'
import { STATUS_TEXT } from './constants'
import { LastUpdateSvg, LastUpdateText, StatusContainer } from './styled'

export const Status: FC = () => {
  const data = useAppSelector(currencies())
  console.log(data)

  return (
    <StatusContainer>
      <LastUpdateSvg src={circleLastUpdate} />
      <LastUpdateText>
        {STATUS_TEXT + ' ' + formatDate(data?.meta.last_updated_at)}
      </LastUpdateText>
    </StatusContainer>
  )
}
