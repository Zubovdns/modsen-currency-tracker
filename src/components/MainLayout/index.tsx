import { Header } from '@components/Header'
import { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
