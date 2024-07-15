import { PropsWithChildren } from 'react'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
