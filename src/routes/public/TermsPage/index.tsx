/* eslint-disable react/no-unescaped-entities */
import PublicScreenTemplate from 'shared/screens/PublicScreenTemplate'

export default function TermsPage() {
  return (
    <PublicScreenTemplate
      extraTopPaddingSmall={false}
      loading={false}
      innerContainerStyle="pt-[25%]"
    >
      <h1 className="text-center text-5xl font-bold text-black ">
        Terms of Service
      </h1>
    </PublicScreenTemplate>
  )
}
