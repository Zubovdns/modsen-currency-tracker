import { FC, PropsWithChildren } from 'react'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
