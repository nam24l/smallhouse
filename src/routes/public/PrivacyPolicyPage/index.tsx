/* eslint-disable react/no-unescaped-entities */
import PublicScreenTemplate from 'shared/screens/PublicScreenTemplate'

export default function PrivacyPolicyPage() {
  return (
    <PublicScreenTemplate
      extraTopPaddingSmall={false}
      loading={false}
      innerContainerStyle="pt-[25%]"
    >
      <h1 className="text-center text-5xl font-bold text-black ">
        Privacy Policy
      </h1>
      <span className="text-sm text-gray-600">Last Updated: Never</span>
    </PublicScreenTemplate>
  )
}
