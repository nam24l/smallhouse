import { Navigate, Outlet, useNavigate } from 'react-router'
import AreYouSureContextProvider from 'shared/providers/AreYouSureContext'
import { InformationPopupContextProvider } from 'shared/providers/InformationPopupContext'
import { WindowHeightContextProvider } from 'shared/providers/WindowHeightContext'
import useAuthStore from 'stores/useAuthStore'
import { Header } from 'shared/components'
import { Footer } from 'shared/components'
export function Index() {
  const isLoggedIn = useAuthStore((s) => s.accessToken)
  return <Navigate to={isLoggedIn ? '/dashboard' : '/sign-in'} replace={true} />
}

export function RootLayout() {
  return (
    <AreYouSureContextProvider navigate={useNavigate()}>
      <InformationPopupContextProvider>
        <WindowHeightContextProvider>
          <div className="relative size-full">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </WindowHeightContextProvider>
      </InformationPopupContextProvider>
    </AreYouSureContextProvider>
  )
}
