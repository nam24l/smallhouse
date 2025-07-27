import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from 'react-router'

import { Toaster } from 'react-hot-toast'
// ROUTES
import { Index, RootLayout } from './routes/root'
import Auth from './routes/validation'
import { useAuthStore } from 'stores'
import { useState } from 'react'
import { LoadingScreenProvider } from 'shared/providers/LoadingScreenContext'

import { ModalProvider } from 'shared/providers/ModalContext'
import { WindowHeightContextProvider } from 'shared/providers/WindowHeightContext'

import TempMainPage from 'routes/main/TempMainPage'
import { SignInPage, ForgotPasswordPage, SignUpPage } from 'routes/auth'
import { PrivacyPolicyPage, TermsPage, HomePage } from 'routes/public'
import { ErrorScreen } from 'shared/screens'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        element: <Auth />,
        children: [
          {
            path: 'sign-in',
            element: <SignInPage />
          },
          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />
          },
          {
            path: 'sign-up',
            element: <SignUpPage />
          }
        ]
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'temp',
            element: <TempMainPage />
            // children: [{}]
          }
        ]
      },
      {
        path: 'privacy',
        element: <PrivacyPolicyPage />
      },
      {
        path: 'terms',
        element: <TermsPage />
      }
    ],
    errorElement: <ErrorScreen />
  }
])

function RequireAuth() {
  const isLoggedIn = useAuthStore((s) => s.accessToken)

  if (!isLoggedIn) {
    return <Navigate to={'/sign-in'} replace={true} />
  }

  return <Outlet />
}

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => alert(`Something went wrong: ${error.message}`)
        }),
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
            retry: 5
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <LoadingScreenProvider>
          <WindowHeightContextProvider>
            <RouterProvider router={router} />
            <Toaster />
          </WindowHeightContextProvider>
        </LoadingScreenProvider>
      </ModalProvider>
    </QueryClientProvider>
  )
}
