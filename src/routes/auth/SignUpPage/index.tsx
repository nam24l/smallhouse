import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from 'stores'
import { Link } from 'react-router'
import { SButton, TextFieldForm } from 'shared/components'
import { AuthScreenTemplate } from 'shared/screens'

export interface SignUpFormValues {
  emailAddress: string
  password: string
  verifyPassword: string
}

export default function SignUpPage() {
  const [errorCode, setErrorCode] = useState('')
  const form = useForm<SignUpFormValues>({
    context: {
      emailAddress: '',
      password: '',
      verifyPassword: ''
    },
    defaultValues: {
      emailAddress: '',
      password: '',
      verifyPassword: ''
    }
  })
  const [isAccepted, setIsAccepted] = useState(false)
  const { setAuthStore } = useAuthStore()
  const { register, formState, watch } = form
  const { errors, dirtyFields } = formState

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
        <h1 className="text-center text-3xl text-black ">
          Create your account
        </h1>
        <div className=" py-8" />

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center"
        >
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
            register={register('password', {
              required: true,
              minLength: 6,
              validate: (value) =>
                watch('verifyPassword') === value
                  ? true
                  : 'Passwords do not match'
            })}
            placeholder="Type your password"
            defaultValue={''}
            helperText="Password"
            helperTextStyle=" text-sm"
            className="placeholder:text-placeholder placeholder: text w-[424px] rounded-[100px] bg-sidebar py-3"
          />
          <span className="self-start py-2 text-xs text-[#777E90]">
            Must be 8 characters long
          </span>
          {errors.password && (
            <>
              <div className=" py-2" />
              <p>
                {errors.password.type == 'required'
                  ? 'Please input your password'
                  : errors.password.message}
              </p>
            </>
          )}
          <div className=" py-3" />
          <TextFieldForm
            isError={errors.password}
            type="password"
            register={register('verifyPassword', {
              required: true,
              minLength: 6,
              validate: (value) =>
                watch('password') === value ? true : 'Passwords do not match'
            })}
            placeholder="Retype your password"
            defaultValue={''}
            helperText="Password Confirmation"
            helperTextStyle=" text-sm"
            className="placeholder:text-placeholder placeholder: text w-[424px] rounded-[100px] bg-sidebar py-3"
          />
          {errors.verifyPassword && (
            <>
              <div className=" py-2" />
              <p>
                {errors.verifyPassword.type == 'required'
                  ? 'Please input confirm your password'
                  : errors.verifyPassword.message}
              </p>
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

          <div
            className="flex w-[424px] gap-3 py-3"
            onClick={() => setIsAccepted(!isAccepted)}
          >
            <input
              type="checkbox"
              name="isCheckboxAccepted"
              checked={isAccepted}
              onChange={() => setIsAccepted(!isAccepted)}
            />

            <span className=" text-xs text-[#425466]">
              By creating an account, that means you agree to the{' '}
              <Link className="" to={'/terms'}>
                Terms and Conditions
              </Link>{' '}
              and our{' '}
              <Link className="" to={'/privacy'}>
                Privacy Policy
              </Link>{' '}
            </span>
          </div>
          <SButton
            size="normal"
            formSubmit
            disabled={
              !isAccepted ||
              form.formState.isLoading ||
              !dirtyFields.emailAddress?.valueOf() ||
              !dirtyFields.password?.valueOf() ||
              !dirtyFields.verifyPassword?.valueOf()
            }
            title={'Sign Up'}
            variant={
              isAccepted &&
              !form.formState.isLoading &&
              dirtyFields.emailAddress?.valueOf() &&
              dirtyFields.password?.valueOf() &&
              dirtyFields.verifyPassword?.valueOf()
                ? 'full'
                : 'full-disabled'
            }
            isLoading={form.formState.isLoading}
          />

          <span className="py-3 text-sm">
            Already have an account?
            <Link className="" to={'/sign-in'}>
              {' '}
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </AuthScreenTemplate>
  )
}
