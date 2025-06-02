import { Navigate, Outlet } from 'react-router'
import { useWindowHeight } from 'shared/providers/WindowHeightContext'
import { useAuthStore } from 'stores'

export default function Auth() {
  const isLoggedIn = useAuthStore((s) => s.accessToken)
  const windowHeight = useWindowHeight()
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        maxHeight: windowHeight
      }}
    >
      <div className=" flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
