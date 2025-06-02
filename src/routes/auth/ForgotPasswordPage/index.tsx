import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignInFormValues } from '../SignInPage'
import { TextFieldForm, SButton } from 'shared/components'
import { AuthScreenTemplate } from 'shared/screens'

export default function ForgotPasswordPage() {
  const [errorCode, setErrorCode] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm<SignInFormValues>({
    context: {
      emailAddress: ''
    },
    defaultValues: {
      emailAddress: ''
    }
  })

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
        <h1 className=" text-center text-3xl text-black ">Forgot Password</h1>
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
          {isSuccess && (
            <>
              <div className="py-3" />
              <p>Success! Please check your email to reset your password.</p>
            </>
          )}
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
            title={'Request Password'}
            isLoading={form.formState.isLoading}
          />
        </form>
      </div>
    </AuthScreenTemplate>
  )
}
