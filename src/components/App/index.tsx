import { MainLayout } from '@components/MainLayout'
import { PageLoader } from '@components/PageLoader'
import { routes } from '@constants/routes'
import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
  )
}
