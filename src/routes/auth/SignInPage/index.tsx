import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import TextFieldForm from '../../../shared/components/TextField'
import { useAuthStore } from 'stores'
import { Link } from 'react-router'
import { TextFieldForm, SButton } from 'shared/components'
import { AuthScreenTemplate } from 'shared/screens'

export interface SignInFormValues {
  emailAddress: string
  password: string
}

export default function SignInPage() {
  const [errorCode, setErrorCode] = useState('')
  const form = useForm<SignInFormValues>({
    context: {
      emailAddress: '',
      password: ''
    },
    defaultValues: {
      emailAddress: '',
      password: ''
    }
  })

  const { setAuthStore } = useAuthStore()
  const { errors } = form.formState
  const { register } = form

  const onSubmit = form.handleSubmit((data) => {
    return
  })

  return (
    <AuthScreenTemplate
      extraTopPaddingSmall={false}
      loading={false}
      containerStyle="items-center"
    >
      <div className="flex flex-col justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center "
        >
          <div className="flex flex-col items-center align-middle">
            <TextFieldForm
              isError={errors.emailAddress}
              type="email"
              placeholder="Type your e-mail"
              helperText="E-mail"
              helperTextStyle=" text-sm"
              className="placeholder:text-placeholder placeholder: text w-[424px] rounded-[100px] bg-sidebar py-3"
              defaultValue={''}
              register={register('emailAddress', { required: true })}
            />
            {errors.emailAddress && (
              <>
                <div className=" py-2" />
                <p>Please input your email address.</p>
              </>
            )}
            <div className=" py-3" />
            <TextFieldForm
              isError={errors.password}
              type="password"
              register={register('password', { required: true })}
              placeholder="Type your password"
              defaultValue={''}
              helperText="Password"
              helperTextStyle=" text-sm"
              className="placeholder:text-placeholder placeholder: text w-[424px] rounded-[100px] bg-sidebar py-3"
            />
            <Link
              className="self-end py-2 text-xs text-[#777E90]"
              to={'/forgot-password'}
            >
              Forgot Password
            </Link>
            {errors.password && (
              <>
                <div className=" py-2" />
                <p>Please input your password.</p>
              </>
            )}
            <div className=" py-4" />
            {errorCode && (
              <>
                <div className=" py-2" />
                <p>{errorCode}</p>
                <div className=" py-2" />
              </>
            )}

            <SButton
              size="normal"
              formSubmit
              title={'Sign In'}
              variant="full"
              isLoading={form.formState.isLoading}
            />

            <span className="py-3 text-sm">
              Don&apos;t have an account?
              <Link className="" to={'/sign-up'}>
                {' '}
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthScreenTemplate>
  )
}
