import { Fragment, ReactNode } from 'react'
import { Dropdown, DropdownType, SButton, SButtonType } from '..'

export type ActionPopupType = {
  buttonSpacing?:
    | 'justify-between'
    | 'justify-around'
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-evenly'
  show: boolean
  header: string
  body: (string | ReactNode)[]
  onClose: () => void
  dropdown?: DropdownType
  buttonsProps?: SButtonType[]
  removeBottomSection?: boolean
  bottomText?: string
}

export default function ActionPopup({
  buttonSpacing,
  show,
  header,
  body,
  onClose,
  dropdown,
  buttonsProps,
  removeBottomSection,
  bottomText
}: ActionPopupType) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={
        `overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center m-0 min-h-[1000px] lg:min-h-0` +
        (show ? ' bg-primary bg-opacity-80' : ' hidden')
      }
    >
      <div className="relative size-full max-w-xl p-4 md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {header}
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div
            className={
              'space-y-6 flex flex-col items-stretch ' +
              (removeBottomSection ? 'px-6 pt-6' : 'p-6')
            }
          >
            {body.map((i, c) =>
              typeof i == 'string' ? (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-white lg:text-base"
                  dangerouslySetInnerHTML={{ __html: i }}
                />
              ) : (
                <Fragment key={'' + c}>{i}</Fragment>
              )
            )}
            {dropdown && <Dropdown {...dropdown} variant="outline" />}
          </div>
          {!!buttonsProps?.length && (
            <div
              className={
                removeBottomSection
                  ? 'p-6'
                  : `flex items-center ${
                      buttonSpacing || 'justify-between'
                    } space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600`
              }
            >
              {/* <div className="flex space-x-4"> */}
              {buttonsProps?.map((e) => <SButton {...e} key={e.title} />)}
              {/* </div> */}
              {bottomText && (
                <span className="flex flex-col justify-end self-stretch text-sm text-[#414960]">
                  <span>{bottomText}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
