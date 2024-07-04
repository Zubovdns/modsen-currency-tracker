import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@components/MainLayout'
import { PageLoader } from '@components/PageLoader'
import { routes } from '@constants/routes'

export const App: FC = () => (
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
