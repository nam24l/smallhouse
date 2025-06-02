import { CSSProperties } from 'react'

type SVGProps = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const jsxMap = {
  ChevronLeft: (props: SVGProps) => (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6019 9.49823C21.9206 9.81702 22.0997 10.2493 22.0997 10.7001C22.0997 11.1509 21.9206 11.5832 21.6019 11.902L16.0038 17.5001L21.6019 23.0982C21.9116 23.4189 22.0829 23.8483 22.0791 24.294C22.0752 24.7397 21.8964 25.1661 21.5812 25.4813C21.266 25.7965 20.8396 25.9753 20.3939 25.9792C19.9482 25.983 19.5188 25.8117 19.1981 25.502L12.3981 18.702C12.0794 18.3832 11.9004 17.9509 11.9004 17.5001C11.9004 17.0493 12.0794 16.617 12.3981 16.2982L19.1981 9.49823C19.5169 9.17952 19.9492 9.00049 20.4 9.00049C20.8508 9.00049 21.2831 9.17952 21.6019 9.49823V9.49823Z"
        fill="black"
      />
    </svg>
  ),
  ChevronRight: (props: SVGProps) => {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="35"
        viewBox="0 0 1280.000000 1318.000000"
        fill="none"
        {...props}
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform="translate(0.000000,1318.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M5040 9790 c-259 -31 -478 -222 -544 -477 -20 -77 -21 -237 -1 -322
 9 -35 34 -100 57 -145 40 -79 65 -105 1127 -1169 l1086 -1087 -1072 -1073
 c-704 -705 -1083 -1091 -1106 -1127 -96 -155 -126 -333 -85 -510 6 -25 28 -83
 51 -130 32 -69 55 -100 121 -165 137 -136 267 -189 461 -188 138 0 237 30 346
 102 57 38 372 347 1400 1377 1301 1304 1327 1330 1367 1410 53 103 72 184 72
 304 0 120 -19 201 -72 304 -40 80 -65 105 -1372 1414 -920 922 -1351 1347
 -1396 1377 -131 87 -281 123 -440 105z"
          />
        </g>
      </svg>
    )
  },
  Back: (props: SVGProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
    >
      <path
        d="M18.3334 9.58288V10.4162C18.3334 10.5267 18.2895 10.6327 18.2114 10.7108C18.1332 10.789 18.0273 10.8329 17.9167 10.8329H4.44175L8.15008 14.5329C8.18914 14.5716 8.22013 14.6177 8.24129 14.6685C8.26244 14.7193 8.27333 14.7737 8.27333 14.8287C8.27333 14.8837 8.26244 14.9382 8.24129 14.989C8.22013 15.0397 8.18914 15.0858 8.15008 15.1246L7.55841 15.7079C7.51968 15.7469 7.4736 15.7779 7.42282 15.7991C7.37205 15.8202 7.31759 15.8311 7.26258 15.8311C7.20758 15.8311 7.15312 15.8202 7.10234 15.7991C7.05157 15.7779 7.00548 15.7469 6.96675 15.7079L1.85008 10.5996C1.73284 10.4825 1.66689 10.3236 1.66675 10.1579V9.84122C1.66867 9.67587 1.73434 9.51765 1.85008 9.39955L6.96675 4.29122C7.00548 4.25216 7.05157 4.22117 7.10234 4.20001C7.15312 4.17886 7.20758 4.16797 7.26258 4.16797C7.31759 4.16797 7.37205 4.17886 7.42282 4.20001C7.4736 4.22117 7.51968 4.25216 7.55841 4.29122L8.15008 4.88288C8.18888 4.9209 8.21971 4.96628 8.24076 5.01637C8.2618 5.06645 8.27264 5.12023 8.27264 5.17455C8.27264 5.22888 8.2618 5.28265 8.24076 5.33274C8.21971 5.38282 8.18888 5.4282 8.15008 5.46622L4.44175 9.16622H17.9167C18.0273 9.16622 18.1332 9.21012 18.2114 9.28826C18.2895 9.3664 18.3334 9.47238 18.3334 9.58288Z"
        fill={props.style?.color}
      />
    </svg>
  ),
  Close: (props: SVGProps) => (
    <svg
      version="1.2"
      baseProfile="tiny"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 1000 1000"
      overflow="visible"
      xmlSpace="preserve"
      className={props.className}
      style={props.style}
    >
      <g id="layer1">
        <g id="g3763" transform="matrix(.91837 0 0 .91837 47.587 10.944)">
          <path
            id="path2991"
            fill="none"
            stroke={props.style?.color}
            strokeWidth="86"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="
   M314.9,354.3L671,710.4"
          />
          <path
            id="path2993"
            fill="none"
            stroke={props.style?.color}
            strokeWidth="86"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M671,354.3
   L314.9,710.4"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  ChevronDown: (props: SVGProps) => (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.55767 8.15747C5.75457 7.96062 6.0216 7.85004 6.30002 7.85004C6.57844 7.85004 6.84547 7.96062 7.04237 8.15747L10.5 11.6151L13.9577 8.15747C14.0545 8.05718 14.1704 7.97719 14.2985 7.92216C14.4266 7.86713 14.5644 7.83817 14.7038 7.83695C14.8432 7.83574 14.9815 7.86231 15.1105 7.9151C15.2396 7.9679 15.3568 8.04586 15.4554 8.14445C15.554 8.24304 15.6319 8.36027 15.6847 8.48931C15.7375 8.61836 15.7641 8.75662 15.7629 8.89604C15.7617 9.03546 15.7327 9.17324 15.6777 9.30134C15.6226 9.42945 15.5427 9.54531 15.4424 9.64217L11.2424 13.8422C11.0455 14.039 10.7784 14.1496 10.5 14.1496C10.2216 14.1496 9.95457 14.039 9.75767 13.8422L5.55767 9.64217C5.36083 9.44526 5.25024 9.17824 5.25024 8.89982C5.25024 8.62139 5.36083 8.35437 5.55767 8.15747Z"
        fill="#000"
      />
    </svg>
  ),
  Check: (props: SVGProps) => (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 10.25L6.75 13.25L14.25 5.75"
        stroke="#EEF2F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  BlackCheck: (props: SVGProps) => (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 10.25L6.75 13.25L14.25 5.75"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Plus: (props: SVGProps) => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M19.5 12V13C19.5 13.1326 19.4473 13.2598 19.3536 13.3536C19.2598 13.4473 19.1326 13.5 19 13.5H13.5V19C13.5 19.1326 13.4473 19.2598 13.3536 19.3536C13.2598 19.4473 13.1326 19.5 13 19.5H12C11.8674 19.5 11.7402 19.4473 11.6464 19.3536C11.5527 19.2598 11.5 19.1326 11.5 19V13.5H6C5.86739 13.5 5.74021 13.4473 5.64645 13.3536C5.55268 13.2598 5.5 13.1326 5.5 13V12C5.5 11.8674 5.55268 11.7402 5.64645 11.6464C5.74021 11.5527 5.86739 11.5 6 11.5H11.5V6C11.5 5.86739 11.5527 5.74021 11.6464 5.64645C11.7402 5.55268 11.8674 5.5 12 5.5H13C13.1326 5.5 13.2598 5.55268 13.3536 5.64645C13.4473 5.74021 13.5 5.86739 13.5 6V11.5H19C19.1326 11.5 19.2598 11.5527 19.3536 11.6464C19.4473 11.7402 19.5 11.8674 19.5 12Z"
          fill="white"
        />
      </svg>
    )
  },
  Separator: (props: SVGProps) => {
    return (
      <svg
        width="17"
        height="2"
        viewBox="0 0 17 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M0.506897 0.764648L16.5 1.23503" stroke="#999DA8" />
      </svg>
    )
  },
  TooltipPointer: (props: SVGProps) => {
    return (
      <svg
        width="24"
        height="7"
        viewBox="0 0 24 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.17158 5.1706L6.34315 2.34217C4.84286 0.841879 2.80802 -0.000976562 0.686292 -0.000976562H23.3137C21.192 -0.000976562 19.1571 0.841875 17.6569 2.34217L14.8284 5.1706C13.2663 6.73269 10.7337 6.7327 9.17158 5.1706Z"
          fill="#F3F4F6"
        />
      </svg>
    )
  },
  LoadingSpinner: (props: SVGProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          shapeRendering: 'auto',
          margin: 'auto'
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <g transform="translate(80,50)">
          <g transform="rotate(0)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="1">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.875s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.875s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(71.21320343559643,71.21320343559643)">
          <g transform="rotate(45)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.875">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.75s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.75s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(50,80)">
          <g transform="rotate(90)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.75">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.625s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.625s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(28.786796564403577,71.21320343559643)">
          <g transform="rotate(135)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.625">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.5s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.5s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(20,50.00000000000001)">
          <g transform="rotate(180)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.5">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.375s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.375s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(28.78679656440357,28.786796564403577)">
          <g transform="rotate(225)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.375">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.25s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.25s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(49.99999999999999,20)">
          <g transform="rotate(270)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.25">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.125s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.125s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(71.21320343559643,28.78679656440357)">
          <g transform="rotate(315)">
            <circle cx="0" cy="0" r="6" fill="#000" fillOpacity="0.125">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="0s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="0s"
              ></animate>
            </circle>
          </g>
        </g>
      </svg>
    )
  },
  Search: (props: SVGProps) => {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21 21.5L15 15.5M17 10.5C17 11.4193 16.8189 12.3295 16.4672 13.1788C16.1154 14.0281 15.5998 14.7997 14.9497 15.4497C14.2997 16.0998 13.5281 16.6154 12.6788 16.9672C11.8295 17.3189 10.9193 17.5 10 17.5C9.08075 17.5 8.1705 17.3189 7.32122 16.9672C6.47194 16.6154 5.70026 16.0998 5.05025 15.4497C4.40024 14.7997 3.88463 14.0281 3.53284 13.1788C3.18106 12.3295 3 11.4193 3 10.5C3 8.64348 3.7375 6.86301 5.05025 5.55025C6.36301 4.2375 8.14348 3.5 10 3.5C11.8565 3.5 13.637 4.2375 14.9497 5.55025C16.2625 6.86301 17 8.64348 17 10.5Z"
          stroke="#999DA8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  HamburgerMenu: (props: SVGProps) => {
    return (
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <line y1="1" x2="20" y2="1" stroke="#9CA3AF" strokeWidth="2" />
        <line y1="7" x2="20" y2="7" stroke="#9CA3AF" strokeWidth="2" />
        <line y1="13" x2="20" y2="13" stroke="#9CA3AF" strokeWidth="2" />
      </svg>
    )
  },
  MenuIcon: (props: SVGProps) => {
    return (
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M25.8333 4.5H7.16667C5.69391 4.5 4.5 5.69391 4.5 7.16667V25.8333C4.5 27.3061 5.69391 28.5 7.16667 28.5H25.8333C27.3061 28.5 28.5 27.3061 28.5 25.8333V7.16667C28.5 5.69391 27.3061 4.5 25.8333 4.5Z"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4997 15.1667C13.9724 15.1667 15.1663 13.9728 15.1663 12.5C15.1663 11.0272 13.9724 9.83334 12.4997 9.83334C11.0269 9.83334 9.83301 11.0272 9.83301 12.5C9.83301 13.9728 11.0269 15.1667 12.4997 15.1667Z"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.5 20.5L24.3853 16.3853C23.8853 15.8854 23.2071 15.6046 22.5 15.6046C21.7929 15.6046 21.1147 15.8854 20.6147 16.3853L8.5 28.5"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  FileUpload: (props: SVGProps) => {
    return (
      <svg
        width="85"
        height="84"
        viewBox="0 0 85 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g opacity="0.5">
          <path
            d="M67 10.5H18C14.134 10.5 11 13.634 11 17.5V66.5C11 70.366 14.134 73.5 18 73.5H67C70.866 73.5 74 70.366 74 66.5V17.5C74 13.634 70.866 10.5 67 10.5Z"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 38.5C35.866 38.5 39 35.366 39 31.5C39 27.634 35.866 24.5 32 24.5C28.134 24.5 25 27.634 25 31.5C25 35.366 28.134 38.5 32 38.5Z"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74 52.5L63.199 41.699C61.8863 40.3867 60.1061 39.6495 58.25 39.6495C56.3939 39.6495 54.6137 40.3867 53.301 41.699L21.5 73.5"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    )
  },
  SubmitArrow: (props: SVGProps) => {
    return (
      <svg
        width="5"
        height="9"
        viewBox="0 0 5 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1 1.5L3.64645 4.14645C3.84171 4.34171 3.84171 4.65829 3.64645 4.85355L1 7.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  GarbageCan: (props: SVGProps) => {
    return (
      <svg
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.086 5.4021C2.086 7.17074 2.086 8.93939 2.086 10.708C2.086 11.6163 2.086 12.4767 2.086 13.3849C2.086 13.9585 1.93732 14.6755 2.23467 15.2013C2.53203 15.775 3.12673 15.9662 3.72144 16.1096C6.10026 16.5876 8.57819 16.6354 11.0066 16.2052C12.0969 16.014 12.4438 15.2491 12.4438 14.2453C12.4438 13.0981 12.4438 11.9509 12.3942 10.8036C12.3447 8.98719 12.2455 7.21854 12.2455 5.4021"
          fill="#151313"
        />
        <path
          d="M2.086 5.4021C2.086 7.17074 2.086 8.93939 2.086 10.708C2.086 11.6163 2.086 12.4767 2.086 13.3849C2.086 13.9585 1.93732 14.6755 2.23467 15.2013C2.53203 15.775 3.12673 15.9662 3.72144 16.1096C6.10026 16.5876 8.57819 16.6354 11.0066 16.2052C12.0969 16.014 12.4438 15.2491 12.4438 14.2453C12.4438 13.0981 12.4438 11.9509 12.3942 10.8036C12.3447 8.98719 12.2455 7.21854 12.2455 5.4021"
          stroke="#151313"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M4.61328 7.21851V14.2931"
          stroke="#E7E9FB"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.1416 7.21851V14.2931"
          stroke="#E7E9FB"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.61914 7.21851V14.2931"
          stroke="#E7E9FB"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.846715 3.89619C1.14407 4.1352 1.5901 4.08739 1.93701 4.03959C2.38304 4.03959 2.82907 4.03959 3.27509 4.03959C4.26627 4.08739 5.307 4.08739 6.34774 4.1352C8.4292 4.183 10.5107 4.183 12.5921 4.1352C12.8895 4.1352 13.2364 4.1352 13.5338 4.08739C13.6824 4.08739 13.7815 4.1352 13.8807 4.03959C14.1285 3.80059 13.9302 3.03577 13.8311 2.79676C13.732 2.50996 13.5833 2.22315 13.3355 2.12755C13.1373 2.03194 12.939 2.03194 12.6913 2.03194C9.46994 1.98414 6.19906 1.98414 2.97774 2.03194C2.43259 2.03194 1.39186 1.88854 0.995391 2.27095C0.747598 2.55776 0.598921 3.08357 0.698039 3.60938C0.698039 3.70499 0.747598 3.80059 0.797156 3.84839L0.846715 3.89619Z"
          fill="#151313"
          stroke="#151313"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.05078 1.84085C6.10034 1.12383 6.29858 0.454614 7.19063 0.502415C7.93401 0.550217 8.4296 1.12383 8.33048 1.84085"
          stroke="#151313"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  RobotFace: (props: SVGProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
    >
      <path
        d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"
        fill={props.style?.color}
      />
      <path
        d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"
        fill={props.style?.color}
      />
    </svg>
  ),
  UserCheck: (props: SVGProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
    >
      <path
        d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        fill={props.style?.color}
      />
      <path
        d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"
        fill={props.style?.color}
      />
    </svg>
  )
}

export default function Svg({
  name,
  className,
  style,
  onClick
}: {
  name: keyof typeof jsxMap
  className?: string
  style?: CSSProperties
  onClick?: () => void
}) {
  const C = jsxMap[name]
  return <C className={className} style={style} onClick={onClick} />
}
