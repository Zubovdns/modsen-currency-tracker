import { MainLayout } from '@components/MainLayout'
import { routes } from '@constants/routes'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </MainLayout>
  )
}
