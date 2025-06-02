import { useNavigate } from 'react-router'
import SButton from 'shared/components/SButton'

export default function ErrorScreen() {
  const nav = useNavigate()
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center gap-4 align-middle">
        <h1 className="text-[200px] leading-none">404</h1>
        <span className="text-center text-sm">
          Ooops! We can&apos;t find that page.
        </span>
        <SButton
          onPress={() => nav('/dashboard', { replace: true })}
          title="Back Home"
        />
      </div>
    </div>
  )
}
