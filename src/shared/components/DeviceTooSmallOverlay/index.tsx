import { useMediaQuery } from 'react-responsive'

export const useTabletQuery = () => {
  return useMediaQuery({ query: '(max-width: 1000px)' })
}
export const useSmallDeviceQuery = () => {
  return useMediaQuery({ query: '(max-width: 768px)' })
}
export default function DeviceTooSmallOverlay() {
  const tabletMediaQuery = useTabletQuery()
  const phoneMediaQuery = useSmallDeviceQuery()
  const show = phoneMediaQuery ? 'phone' : 'tablet'
  if (!tabletMediaQuery) {
    return null
  }

  const titleText = (() => {
    if (show === 'phone') {
      return 'We notice that you’re using a mobile device!'
    }
    if (show === 'tablet') {
      return 'We notice that you’re using a tablet!'
    }
    return ''
  })()

  return (
    <>
      <div className="fixed inset-0 flex size-full flex-col items-center justify-center bg-sidebar px-8">
        <h2 className="z-50 mt-8 text-center text-3xl text-black">
          {titleText}
        </h2>
        <p className="z-50 mt-4 text-center text-lg text-black">
          To have a better experience using the site, we require switching to a
          desktop or downloading the Mobile App.
        </p>
      </div>
    </>
  )
}
