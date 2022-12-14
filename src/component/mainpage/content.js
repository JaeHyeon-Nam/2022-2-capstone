import React from "react";

const avatar =
  "data:image/jpeg;base64,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";
const colors = {
  red: {
    main: "#ff3d00",
    1000: "#ff5019",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#ffebe5",
    100: "#fff5f2"
  },
  pink: {
    main: "#f51f7e",
    1000: "#f6338a",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#fee8f2",
    100: "#fef3f8"
  },
  purpleA: {
    main: "#a200f2",
    1000: "#ab19f3",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#f5e5fd",
    100: "#faf2fe"
  },
  purpleB: {
    main: "#651dff",
    1000: "#7435ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#efe8ff",
    100: "#f7faff"
  },
  blueA: {
    main: "#2979ff",
    1000: "#3e86ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e9f1ff",
    100: "#f4f8ff"
  },
  blueB: {
    main: "#009dff",
    1000: "#19a6ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f5ff",
    100: "#f2faff"
  },
  cyan: {
    main: "#00bcd4",
    1000: "#19c2d8",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f8fa",
    100: "#f2fbfd"
  },
  greenA: {
    main: "#00bfa5",
    1000: "#19c5ae",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f8f6",
    100: "#f2fcfa"
  },
  greenB: {
    main: "#64dd17",
    1000: "#73e02e",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#effbe7",
    100: "#f7fdf3"
  },
  yellow: {
    main: "#ffab00",
    1000: "#ffb319",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#ffab00",
    100: "#fffbf2"
  },
  orange: {
    main: "#ff6f00",
    1000: "#ff7d19",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#fff0e5",
    100: "#fff8f2"
  },
  gray: {
    main: "#b1b5bc",
    1000: "#b8bbc2",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#dfe3ea",
    200: "#eef2f8",
    100: "#f1f5fb"
  },
  default: {
    headline: "#001738",
    subtitle: "#8492a6",
    primaryButton: "#2979ff",
    icon: "#8492a6"
  }
};
const cards1 = [
  {
    logo: (
      <img src="/image/1.jpg"/>
      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M37.38 29.205L46.275 30.555C45.66 34.605 43.785 38.235 41.01 41.01L34.65 34.65C36.09 33.21 37.065 31.32 37.38 29.205ZM30.735 9.255L29.31 18.135C33.945 18.885 37.5 22.89 37.5 27.75H46.5C46.5 18.405 39.66 10.695 30.735 9.255ZM27.75 37.5C22.365 37.5 18 33.135 18 27.75C18 22.365 22.365 18 27.75 18V9C17.4 9 9 17.4 9 27.75C9 38.1 17.4 46.5 27.75 46.5C31.77 46.5 35.475 45.225 38.535 43.08L33.36 35.73C31.77 36.84 29.835 37.5 27.75 37.5Z"
      //     fill="#F6338A"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "??????????????????",
    cardColor: colors["pink"][100],
    borderColor: colors["pink"][200],
    iconColor: colors["pink"][1000],
    counter: 18
  },
  {
    logo: (
      <img src="/image/2.jpg"/>
      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M23.5 15C23.5 12.51 25.51 10.5 28 10.5C30.49 10.5 32.5 12.51 32.5 15C32.5 17.49 30.49 19.5 28 19.5C25.51 19.5 23.5 17.49 23.5 15ZM35.5 33.75V28.5C35.5 24.36 32.14 21 28 21C23.86 21 20.5 24.36 20.5 28.5V33.75C20.5 34.995 21.505 36 22.75 36H23.5V44.25C23.5 45.495 24.505 46.5 25.75 46.5H30.25C31.495 46.5 32.5 45.495 32.5 44.25V36H33.25C34.495 36 35.5 34.995 35.5 33.75Z"
      //     fill="#2979FF"
      //   />
      //   <path
      //     opacity="0.4"
      //     d="M38.5 18C40.99 18 43 15.99 43 13.5C43 11.01 40.99 9 38.5 9C36.01 9 34 11.01 34 13.5C34 15.99 36.01 18 38.5 18ZM17.5 18C19.99 18 22 15.99 22 13.5C22 11.01 19.99 9 17.5 9C15.01 9 13 11.01 13 13.5C13 15.99 15.01 18 17.5 18ZM19 33.75V28.5C19 25.62 20.365 23.07 22.465 21.42C21.145 20.235 19.42 19.5 17.5 19.5C13.36 19.5 10 22.86 10 27V30.75C10 31.995 11.005 33 12.25 33H13V39.75C13 40.995 14.005 42 15.25 42H19.75C20.995 42 22 40.995 22 39.75V37.425C20.29 37.08 19 35.565 19 33.75ZM38.5 19.5C36.58 19.5 34.855 20.235 33.535 21.42C35.635 23.07 37 25.62 37 28.5V33.75C37 35.565 35.71 37.08 34 37.425V39.75C34 40.995 35.005 42 36.25 42H40.75C41.995 42 43 40.995 43 39.75V33H43.75C44.995 33 46 31.995 46 30.75V27C46 22.86 42.64 19.5 38.5 19.5Z"
      //     fill="#2979FF"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "????????????",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 13
  },
  {
    logo: (
      <img src="/image/3.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M44.25 11H11.25C10.005 11 9 12.005 9 13.25V37.25C9 38.495 10.005 39.5 11.25 39.5H30.24C30.405 39.5 30.57 39.56 30.705 39.65L38.1 45.185C38.355 45.395 38.685 45.5 39 45.5C39.225 45.5 39.45 45.455 39.675 45.35C40.185 45.095 40.5 44.57 40.5 44V39.5H44.25C45.495 39.5 46.5 38.495 46.5 37.25V13.25C46.5 12.005 45.495 11 44.25 11ZM34.365 30.17C34.275 30.305 32.055 33.5 27.75 33.5C23.445 33.5 21.225 30.305 21.135 30.17C20.895 29.825 20.985 29.36 21.33 29.135C21.465 29.045 21.6 29 21.75 29C21.99 29 22.23 29.12 22.365 29.33C22.395 29.36 24.225 32 27.75 32C31.245 32 33.06 29.435 33.135 29.33C33.375 28.985 33.84 28.91 34.17 29.135C34.515 29.36 34.605 29.825 34.365 30.17Z"
      //     fill="#00BFA5"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "Sports Monster",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 926
  },
  {
    logo: (
      <img src="/image/4.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     fill-rule="evenodd"
      //     clip-rule="evenodd"
      //     d="M41.75 12H13.25C12.005 12 11 13.005 11 14.25V41.25C11 42.495 12.005 43.5 13.25 43.5H41.75C42.995 43.5 44 42.495 44 41.25V14.25C44 13.005 42.995 12 41.75 12ZM26 37.5C26 38.325 25.325 39 24.5 39H20C19.175 39 18.5 38.325 18.5 37.5V27C18.5 26.175 19.175 25.5 20 25.5H24.5C25.325 25.5 26 26.175 26 27V37.5ZM36.5 34.5C36.5 35.325 35.825 36 35 36H30.5C29.675 36 29 35.325 29 34.5V27C29 26.175 29.675 25.5 30.5 25.5H35C35.825 25.5 36.5 26.175 36.5 27V34.5ZM38 21C38 21.825 37.325 22.5 36.5 22.5H18.5C17.675 22.5 17 21.825 17 21V18C17 17.175 17.675 16.5 18.5 16.5H36.5C37.325 16.5 38 17.175 38 18V21Z"
      //     fill="#FFAB00"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "COEX aquarium",
    cardColor: colors["orange"][100],
    borderColor: colors["orange"][200],
    iconColor: colors["orange"][1000],
    counter: 712
  },
  {
    logo: (
      <img src="/image/5.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M46.5 14.75V42.5C46.5 44.15 45.15 45.5 43.5 45.5H40.5V18.5H42.75C44.82 18.5 46.5 16.82 46.5 14.75ZM15.75 32C14.505 32 13.5 33.005 13.5 34.25C13.5 35.495 14.505 36.5 15.75 36.5C16.995 36.5 18 35.495 18 34.25C18 33.005 16.995 32 15.75 32ZM42 17H39V42.5H11.25C10.005 42.5 9 41.495 9 40.25V13.25C9 12.005 10.005 11 11.25 11H42C43.65 11 45 12.35 45 14C45 15.65 43.65 17 42 17ZM19.5 34.25C19.5 32.18 17.82 30.5 15.75 30.5C13.68 30.5 12 32.18 12 34.25C12 36.32 13.68 38 15.75 38C17.82 38 19.5 36.32 19.5 34.25ZM19.5 22.565L21.225 24.29C21.36 24.425 21.555 24.5 21.75 24.5C21.945 24.5 22.14 24.425 22.275 24.275C22.575 23.975 22.575 23.51 22.275 23.21L20.565 21.5L22.29 19.775C22.59 19.475 22.59 19.01 22.29 18.71C21.99 18.41 21.525 18.41 21.225 18.71L19.5 20.435L17.775 18.725C17.475 18.425 17.01 18.425 16.71 18.725C16.41 19.025 16.41 19.49 16.71 19.79L18.435 21.5L16.725 23.225C16.425 23.525 16.425 23.99 16.725 24.29C16.86 24.425 17.055 24.5 17.25 24.5C17.445 24.5 17.64 24.425 17.775 24.275L19.5 22.565ZM34.275 20.225L31.275 17.225C30.975 16.925 30.51 16.925 30.21 17.225L27.21 20.225C27.075 20.36 27 20.555 27 20.75C27 20.945 27.075 21.14 27.225 21.275C27.525 21.575 27.99 21.575 28.29 21.275L30 19.565V26.75C30 30.47 26.97 33.5 23.25 33.5H21.75C21.33 33.5 21 33.83 21 34.25C21 34.67 21.33 35 21.75 35H23.25C27.795 35 31.5 31.295 31.5 26.75V19.565L33.225 21.29C33.525 21.59 33.99 21.59 34.29 21.29C34.59 20.99 34.575 20.51 34.275 20.225Z"
      //     fill="#FF6F00"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "?????????????????????",
    cardColor: colors["red"][100],
    borderColor: colors["red"][200],
    iconColor: colors["red"][1000],
    counter: 123
  },
  {
    logo: (
      <img src="/image/6.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M38 26.015H18.5C18.5 24.725 18.5 23.525 18.5 22.265C18.5 18.695 20.435 15.575 23.3 13.88L21.725 12.29C21.425 11.99 21.425 11.525 21.725 11.225C22.025 10.925 22.49 10.925 22.79 11.225L24.74 13.175C25.82 12.755 27.005 12.515 28.25 12.515C29.495 12.515 30.68 12.755 31.775 13.175L33.725 11.225C34.025 10.925 34.49 10.925 34.79 11.225C35.09 11.525 35.09 11.99 34.79 12.29L33.2 13.88C36.065 15.575 38 18.695 38 22.265C38 23.525 38 24.725 38 26.015ZM42.5 31.265C42.5 31.685 42.17 32.015 41.75 32.015H38V35.765C38 36.89 37.805 37.97 37.445 38.975C37.49 39.005 37.55 39.035 37.595 39.08L40.775 42.26C41.075 42.545 41.075 43.025 40.775 43.325C40.475 43.625 40.01 43.625 39.71 43.325L36.815 40.43C35.165 43.46 31.94 45.53 28.25 45.53C24.56 45.53 21.335 43.475 19.685 40.43L16.79 43.325C16.49 43.625 16.025 43.625 15.725 43.325C15.425 43.025 15.425 42.56 15.725 42.26L18.905 39.08C18.95 39.035 19.01 39.005 19.055 38.975C18.695 37.97 18.5 36.89 18.5 35.765V32.015H14.75C14.33 32.015 14 31.685 14 31.265C14 30.845 14.33 30.515 14.75 30.515H18.5C18.5 29.42 18.5 28.445 18.5 27.515H38C38 28.445 38 29.42 38 30.515H41.75C42.17 30.515 42.5 30.845 42.5 31.265ZM36.5 32.015H29V39.335C29 39.755 28.67 40.085 28.25 40.085C27.83 40.085 27.5 39.74 27.5 39.335V32.015H20V35.765C20 40.31 23.705 44.015 28.25 44.015C32.795 44.015 36.5 40.31 36.5 35.765V32.015Z"
      //     fill="#00BFA5"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "Lotte World",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 743
  },
  {
    logo: (
      <img src="/image/7.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M45.5 37.5V45C45.5 45.825 44.825 46.5 44 46.5H12.5C11.675 46.5 11 45.825 11 45V37.5C11 36.675 11.675 36 12.5 36H20.75C21.17 36 21.5 36.33 21.5 36.75V39.75C21.5 40.17 21.83 40.5 22.25 40.5H34.25C34.67 40.5 35 40.17 35 39.75V36.75C35 36.33 35.33 36 35.75 36H44C44.825 36 45.5 36.675 45.5 37.5ZM21.5 34.5H14V11.25C14 10.005 15.005 9 16.25 9H40.25C41.495 9 42.5 10.005 42.5 11.25V34.5H35C34.175 34.5 33.5 35.175 33.5 36V38.25C33.5 38.67 33.17 39 32.75 39H23.75C23.33 39 23 38.67 23 38.25V36C23 35.175 22.325 34.5 21.5 34.5ZM27.5 27H29V18H27.5V27ZM27.5 31.5H29V28.5H27.5V31.5Z"
      //     fill="#2979FF"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "?????????",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 230
  },
  {
    logo: (
      <img src="/image/8.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M46.5 27.75C46.5 38.1 38.1 46.5 27.75 46.5C17.4 46.5 9 38.1 9 27.75C9 17.4 17.4 9 27.75 9C29.685 9 31.545 9.3 33.315 9.84L32.865 11.28C31.245 10.77 29.535 10.5 27.75 10.5C18.24 10.5 10.5 18.24 10.5 27.75C10.5 37.26 18.24 45 27.75 45C37.26 45 45 37.26 45 27.75C45 22.995 43.065 18.675 39.945 15.555L41.01 14.49C44.4 17.88 46.5 22.575 46.5 27.75ZM27.75 39C21.54 39 16.5 33.96 16.5 27.75C16.5 21.54 21.54 16.5 27.75 16.5C28.905 16.5 30.03 16.68 31.08 17.01L31.53 15.57C30.33 15.195 29.07 15 27.75 15C20.715 15 15 20.715 15 27.75C15 34.785 20.715 40.5 27.75 40.5C34.785 40.5 40.5 34.785 40.5 27.75C40.5 24.225 39.075 21.045 36.765 18.735L35.7 19.8C37.74 21.84 39 24.645 39 27.75C39 33.96 33.96 39 27.75 39ZM31.455 24.045C32.415 24.99 33 26.31 33 27.75C33 30.645 30.645 33 27.75 33C24.855 33 22.5 30.645 22.5 27.75C22.5 24.855 24.855 22.5 27.75 22.5C28.29 22.5 28.8 22.605 29.295 22.755L29.745 21.33C29.115 21.135 28.455 21 27.75 21C24.015 21 21 24.015 21 27.75C21 31.485 24.015 34.5 27.75 34.5C31.485 34.5 34.5 31.485 34.5 27.75C34.5 25.89 33.75 24.195 32.52 22.98L31.455 24.045ZM37.5 13.5C38.325 13.5 39 12.825 39 12C39 11.175 38.325 10.5 37.5 10.5C36.675 10.5 36 11.175 36 12C36 12.825 36.675 13.5 37.5 13.5Z"
      //     fill="#FF6F00"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "??????????????????",
    cardColor: colors["orange"][100],
    borderColor: colors["orange"][200],
    iconColor: colors["orange"][1000],
    counter: 70
  },
  {
    logo: (
      <img src="/image/9.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M47.5873 13.25V34.25C47.5873 35.495 46.5532 36.5 45.2721 36.5H37.5546C36.2735 36.5 35.2394 35.495 35.2394 34.25V27.425C35.4863 27.47 35.7487 27.5 36.0111 27.5C38.1412 27.5 39.8699 25.82 39.8699 23.75C39.8699 21.68 38.1412 20 36.0111 20C35.7487 20 35.4863 20.03 35.2394 20.075V13.25C35.2394 12.005 36.2735 11 37.5546 11H45.2721C46.5532 11 47.5873 12.005 47.5873 13.25ZM16.7175 31.25C16.7175 29.18 18.4462 27.5 20.5762 27.5C20.8386 27.5 21.101 27.53 21.3479 27.575V20.75C21.3479 19.505 20.3138 18.5 19.0327 18.5H11.3152C10.0341 18.5 9 19.505 9 20.75V41.75C9 42.995 10.0341 44 11.3152 44H19.0327C20.3138 44 21.3479 42.995 21.3479 41.75V34.925C21.101 34.97 20.8386 35 20.5762 35C18.4462 35 16.7175 33.32 16.7175 31.25ZM36.0111 26C37.2922 26 38.3264 24.995 38.3264 23.75C38.3264 22.505 37.2922 21.5 36.0111 21.5C35.0079 21.5 34.1589 22.13 33.8348 23H29.0654C28.2165 23 27.5219 23.675 27.5219 24.5V30.5H22.7525C22.4284 29.63 21.5795 29 20.5762 29C19.2951 29 18.261 30.005 18.261 31.25C18.261 32.495 19.2951 33.5 20.5762 33.5C21.5795 33.5 22.4284 32.87 22.7525 32H27.5219C28.3708 32 29.0654 31.325 29.0654 30.5V24.5H33.8348C34.1589 25.37 35.0079 26 36.0111 26Z"
      //     fill="#A200F2"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "Everland",
    cardColor: colors["purpleA"][100],
    borderColor: colors["purpleA"][200],
    iconColor: colors["purpleA"][1000],
    counter: 853
  },
  {
    logo: (
      <img src="/image/10.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M46.5 18V36.75C46.5 37.17 46.17 37.5 45.75 37.5C45.33 37.5 45 37.17 45 36.75V18C45 17.175 44.325 16.5 43.5 16.5H12.75C12.33 16.5 12 16.17 12 15.75C12 15.33 12.33 15 12.75 15H43.5C45.15 15 46.5 16.35 46.5 18ZM43.5 19.5V39C43.5 39.825 42.825 40.5 42 40.5H10.5C9.675 40.5 9 39.825 9 39V19.5C9 18.675 9.675 18 10.5 18H42C42.825 18 43.5 18.675 43.5 19.5ZM24 28.5V25.5H26.25H29.25C29.67 25.5 30 25.17 30 24.75C30 24.33 29.67 24 29.25 24H27V23.25C27 22.83 26.67 22.5 26.25 22.5C25.83 22.5 25.5 22.83 25.5 23.25V24H24C23.175 24 22.5 24.675 22.5 25.5V28.5C22.5 29.325 23.175 30 24 30H28.5V33H26.25H23.25C22.83 33 22.5 33.33 22.5 33.75C22.5 34.17 22.83 34.5 23.25 34.5H25.5V35.25C25.5 35.67 25.83 36 26.25 36C26.67 36 27 35.67 27 35.25V34.5H28.5C29.325 34.5 30 33.825 30 33V30C30 29.175 29.325 28.5 28.5 28.5H24Z"
      //     fill="#64DD17"
      //   />
      // </svg>
    ),
    favorited: true,
    title: "Carribbean Bay",
    cardColor: colors["greenB"][100],
    borderColor: colors["greenB"][200],
    iconColor: colors["greenB"][1000],
    counter: 91
  }
];
const cards2 = [
  {
    logo: (
      <img src="/image/publicize1.jpg"
      />

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M45 22.015H42.33C43.05 21.22 43.5 20.17 43.5 19.015C43.5 16.525 41.49 14.515 39 14.515H25.065L28.29 11.29C28.59 10.99 28.59 10.525 28.29 10.225C27.99 9.925 27.525 9.925 27.225 10.225L22.725 14.725C22.575 14.875 22.5 15.07 22.5 15.265C22.5 15.46 22.575 15.655 22.725 15.79L27.225 20.29C27.525 20.59 27.99 20.59 28.29 20.29C28.59 19.99 28.59 19.525 28.29 19.225L25.065 16.015H39C40.65 16.015 42 17.365 42 19.015C42 20.665 40.65 22.015 39 22.015H34.5H33H10.5C9.675 22.015 9 22.69 9 23.515V44.515C9 45.34 9.675 46.015 10.5 46.015H45C45.825 46.015 46.5 45.34 46.5 44.515V23.515C46.5 22.69 45.825 22.015 45 22.015ZM17.25 41.515H14.25C13.83 41.515 13.5 41.185 13.5 40.765C13.5 40.345 13.83 40.015 14.25 40.015H17.25C17.67 40.015 18 40.345 18 40.765C18 41.185 17.67 41.515 17.25 41.515ZM27.75 40.015C24.855 40.015 22.5 37.33 22.5 34.015C22.5 30.7 24.855 28.015 27.75 28.015C30.645 28.015 33 30.7 33 34.015C33 37.33 30.645 40.015 27.75 40.015ZM41.25 28.015H38.25C37.83 28.015 37.5 27.685 37.5 27.265C37.5 26.845 37.83 26.515 38.25 26.515H41.25C41.67 26.515 42 26.845 42 27.265C42 27.685 41.67 28.015 41.25 28.015Z"
      //     fill="#64DD17"
      //   />
      // </svg>
    ),
    title: "Caribbean Bay ?????? ?????????",
    cardColor: colors["greenB"][100],
    borderColor: colors["greenB"][200],
    iconColor: colors["greenB"][1000],
    counter: 22
  },
  {
    logo: (
      <img src="/image/publicize2.jpg"
      />
      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M23.7518 41C23.3318 41 23.0018 40.67 23.0018 40.25C23.0018 39.83 23.3318 39.5 23.7518 39.5H32.7518C33.1718 39.5 33.5018 39.83 33.5018 40.25C33.5018 40.67 33.1718 41 32.7518 41H23.7518ZM37.2518 42.5H19.2518C18.8318 42.5 18.5018 42.83 18.5018 43.25C18.5018 43.67 18.8318 44 19.2518 44H37.2518C37.6718 44 38.0018 43.67 38.0018 43.25C38.0018 42.83 37.6718 42.5 37.2518 42.5ZM41.0018 30.5C37.7318 30.5 35.5568 26.87 36.9068 23.675L40.3718 15.5H29.0018V16.25V37.25C29.0018 37.67 28.6718 38 28.2518 38C27.8318 38 27.5018 37.67 27.5018 37.25V16.25V15.5H16.1318L19.5818 23.675C20.9468 26.87 18.7718 30.5 15.5018 30.5C12.2318 30.5 10.0568 26.87 11.4068 23.675L14.8718 15.5H13.2518C12.8318 15.5 12.5018 15.17 12.5018 14.75C12.5018 14.33 12.8318 14 13.2518 14H27.5018V11.75C27.5018 11.33 27.8318 11 28.2518 11C28.6718 11 29.0018 11.33 29.0018 11.75V14H43.2518C43.6718 14 44.0018 14.33 44.0018 14.75C44.0018 15.17 43.6718 15.5 43.2518 15.5H41.6318L45.0818 23.675C46.4468 26.87 44.2718 30.5 41.0018 30.5ZM15.5018 17.855L12.7868 24.26C12.7568 24.335 12.7568 24.425 12.7268 24.5H18.2918C18.2468 24.425 18.2468 24.335 18.2168 24.26L15.5018 17.855ZM43.7768 24.5C43.7468 24.425 43.7468 24.335 43.7018 24.26L41.0018 17.855L38.2868 24.26C38.2568 24.335 38.2568 24.425 38.2268 24.5H43.7768Z"
      //     fill="#00BFA5"
      //   />
      // </svg>
    ),
    title: "Caribbean Bay ???????????????",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 152
  },
  {
    logo: (
      <img src="/image/publicize3.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M45.3345 17.7345L40.9709 33.7345C40.8836 34.0255 40.6364 34.2436 40.3309 34.2727L23.3418 35.5818L22.5418 37.1818H38.8182C39.2255 37.1818 39.5455 37.5018 39.5455 37.9091C39.5455 38.3164 39.2255 38.6364 38.8182 38.6364H21.3636C21.1164 38.6364 20.8836 38.5055 20.7382 38.2873C20.6073 38.0691 20.5927 37.8073 20.7091 37.5745L21.6545 35.6982L21.4218 35.7273C21.4073 35.7273 21.3782 35.7273 21.3636 35.7273C21.0291 35.7273 20.7382 35.5091 20.6509 35.1745L15.1236 12.9782C15.0509 12.6727 14.76 12.4545 14.4255 12.4545H9.72727C9.32 12.4545 9 12.1345 9 11.7273C9 11.32 9.32 11 9.72727 11H14.4255C15.4145 11 16.2727 11.6691 16.5345 12.6145L17.5818 16.8327C17.6255 16.8182 17.6836 16.8182 17.7273 16.8182H44.6364C44.8691 16.8182 45.0727 16.92 45.2182 17.1091C45.3491 17.2836 45.3927 17.5164 45.3345 17.7345ZM23.5455 40.0909C22.7455 40.0909 22.0909 40.7455 22.0909 41.5455C22.0909 42.3455 22.7455 43 23.5455 43C24.3455 43 25 42.3455 25 41.5455C25 40.7455 24.3455 40.0909 23.5455 40.0909ZM36.6364 40.0909C35.8364 40.0909 35.1818 40.7455 35.1818 41.5455C35.1818 42.3455 35.8364 43 36.6364 43C37.4364 43 38.0909 42.3455 38.0909 41.5455C38.0909 40.7455 37.4364 40.0909 36.6364 40.0909Z"
      //     fill="#FF6F00"
      //   />
      // </svg>
    ),
    title: "HORROR HALLOWEEN LOTTE WORLD",
    cardColor: colors["red"][100],
    borderColor: colors["red"][200],
    iconColor: colors["red"][1000],
    counter: 97
  },
  {
    logo: (
      <img src="/image/publicize4.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M30.4 31.95L27.4 34.2C27.115 34.41 26.815 34.5 26.5 34.5C25.72 34.5 25 33.885 25 33V31.5V17.25C25 16.005 26.005 15 27.25 15H35.5V11.25C35.5 10.005 34.495 9 33.25 9H15.25C14.005 9 13 10.005 13 11.25V44.25C13 45.495 14.005 46.5 15.25 46.5H33.25C34.495 46.5 35.5 45.495 35.5 44.25V31.5H31.75C31.27 31.5 30.79 31.665 30.4 31.95ZM25.75 42H22.75C22.33 42 22 41.67 22 41.25C22 40.83 22.33 40.5 22.75 40.5H25.75C26.17 40.5 26.5 40.83 26.5 41.25C26.5 41.67 26.17 42 25.75 42ZM42.25 16.5H27.25C26.83 16.5 26.5 16.83 26.5 17.25V31.5V33L29.5 30.75C30.145 30.27 30.94 30 31.75 30H42.25C42.67 30 43 29.67 43 29.25V17.25C43 16.83 42.67 16.5 42.25 16.5ZM30.25 24C29.83 24 29.5 23.67 29.5 23.25C29.5 22.83 29.83 22.5 30.25 22.5C30.67 22.5 31 22.83 31 23.25C31 23.67 30.67 24 30.25 24ZM34.75 24C34.33 24 34 23.67 34 23.25C34 22.83 34.33 22.5 34.75 22.5C35.17 22.5 35.5 22.83 35.5 23.25C35.5 23.67 35.17 24 34.75 24ZM39.25 24C38.83 24 38.5 23.67 38.5 23.25C38.5 22.83 38.83 22.5 39.25 22.5C39.67 22.5 40 22.83 40 23.25C40 23.67 39.67 24 39.25 24Z"
      //     fill="#651DFF"
      //   />
      // </svg>
    ),
    title: "HALLOWEEN IN EVERLAND",
    cardColor: colors["purpleB"][100],
    borderColor: colors["purpleB"][200],
    iconColor: colors["purpleB"][1000],
    counter: 102
  },
  {
    logo: (
      <img src="/image/publicize5.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M14.5 20.5C14.5 16.36 17.86 13 22 13C26.14 13 29.5 16.36 29.5 20.5C29.5 24.64 26.14 28 22 28C17.86 28 14.5 24.64 14.5 20.5ZM22 29.5C15.37 29.5 10 34.87 10 41.5V42.25C10 42.67 10.33 43 10.75 43H33.25C33.67 43 34 42.67 34 42.25V41.5C34 34.87 28.63 29.5 22 29.5ZM33.25 14.5H45.25C45.67 14.5 46 14.17 46 13.75C46 13.33 45.67 13 45.25 13H33.25C32.83 13 32.5 13.33 32.5 13.75C32.5 14.17 32.83 14.5 33.25 14.5ZM45.25 19H34.75C34.33 19 34 19.33 34 19.75C34 20.17 34.33 20.5 34.75 20.5H45.25C45.67 20.5 46 20.17 46 19.75C46 19.33 45.67 19 45.25 19ZM45.25 25H33.25C32.83 25 32.5 25.33 32.5 25.75C32.5 26.17 32.83 26.5 33.25 26.5H45.25C45.67 26.5 46 26.17 46 25.75C46 25.33 45.67 25 45.25 25Z"
      //     fill="#FFAB00"
      //   />
      // </svg>
    ),
    title: "SkyScanner",
    cardColor: colors["orange"][100],
    borderColor: colors["orange"][200],
    iconColor: colors["orange"][1000],
    counter: 138
  },
  {
    logo: (
      <img src="/image/publicize6.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M28.25 9L11 18.75V36.75C11 37.02 11.15 37.275 11.39 37.41L27.89 46.41C27.995 46.47 28.13 46.5 28.25 46.5C28.37 46.5 28.505 46.47 28.61 46.41L45.11 37.41C45.35 37.275 45.5 37.02 45.5 36.75V18.75L28.25 9ZM27.5 44.49L13.295 36.735L22.625 31.395C22.985 31.185 23.105 30.735 22.91 30.375C22.7 30.015 22.25 29.895 21.89 30.09L12.5 35.46V19.605L27.5 28.08V44.49ZM28.25 26.775L14.045 18.75L27.5 11.145V20.25C27.5 20.67 27.83 21 28.25 21C28.67 21 29 20.67 29 20.25V11.145L42.455 18.75L28.25 26.775ZM44 35.46L34.625 30.105C34.265 29.895 33.8 30.03 33.605 30.39C33.395 30.75 33.53 31.215 33.89 31.41L43.22 36.75L29 44.49V28.08L44 19.605V35.46Z"
      //     fill="#F6338A"
      //   />
      // </svg>
    ),
    title: "Hotels.com",
    cardColor: colors["pink"][100],
    borderColor: colors["pink"][200],
    iconColor: colors["pink"][1000],
    counter: 47
  },
  {
    logo: (
      <img src="/image/publicize7.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M30.5 19.5054H32V34.5054H26.36L27.2 40.3854C27.365 41.5704 26.585 42.6804 25.415 42.9054L22.7 43.4454C21.305 43.7454 20 42.6804 20 41.2554V34.5054H18.5C14.36 34.5054 11 31.1454 11 27.0054C11 22.8654 14.36 19.5054 18.5 19.5054H29V26.2554C29 26.6754 29.33 27.0054 29.75 27.0054C30.17 27.0054 30.5 26.6754 30.5 26.2554V19.5054ZM42.83 12.1254L33.5 18.9504V35.0454L42.83 41.8704C43.325 42.2154 44 41.8554 44 41.2554V12.7554C44 12.1554 43.325 11.7954 42.83 12.1254Z"
      //     fill="#2979FF"
      //   />
      // </svg>
    ),
    title: "???????????? 1??? ?????????",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 1
  },
  {
    logo: (
      <img src="/image/publicize8.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M28.5 18C28.5 19.65 27.15 21 25.5 21C23.85 21 22.5 19.65 22.5 18C22.5 16.35 23.85 15 25.5 15C27.15 15 28.5 16.35 28.5 18ZM15 24C15 22.35 13.65 21 12 21C10.35 21 9 22.35 9 24C9 25.65 10.35 27 12 27C13.65 27 15 25.65 15 24ZM24 37.5C22.35 37.5 21 38.85 21 40.5C21 42.15 22.35 43.5 24 43.5C25.65 43.5 27 42.15 27 40.5C27 38.85 25.65 37.5 24 37.5ZM21.75 20.49C21.48 20.07 21.285 19.605 21.15 19.11L15.75 21.51C16.02 21.93 16.215 22.395 16.35 22.89L21.75 20.49ZM15.21 27.15C14.865 27.51 14.445 27.795 13.995 28.02L20.79 37.365C21.135 37.005 21.555 36.72 22.005 36.495L15.21 27.15ZM46.5 18.63C46.5 22.53 42.99 28.695 41.34 31.05C41.205 31.23 41.04 31.35 40.845 31.41C40.74 31.455 40.635 31.485 40.53 31.485C40.5 31.485 40.47 31.47 40.44 31.47C40.365 31.47 40.275 31.44 40.2 31.41C40.005 31.35 39.81 31.23 39.66 31.035C39.645 31.02 39.645 31.005 39.63 30.99L28.38 21.42C28.77 21.09 29.1 20.715 29.355 20.28L37.26 27C35.85 24.3 34.5 21.03 34.5 18.63C34.5 14.97 37.185 12 40.5 12C43.815 12 46.5 14.97 46.5 18.63ZM42 18C42 17.175 41.325 16.5 40.5 16.5C39.675 16.5 39 17.175 39 18C39 18.825 39.675 19.5 40.5 19.5C41.325 19.5 42 18.825 42 18Z"
      //     fill="#F51F7E"
      //   />
      // </svg>
    ),
    title: "???????????????",
    cardColor: colors["pink"][100],
    borderColor: colors["pink"][200],
    iconColor: colors["pink"][1000],
    counter: 102
  },
  {
    logo: (
      <img src="/image/publicize9.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M41.6588 40.005L33.6913 32.0367C35.2311 30.135 36.1644 27.72 36.1644 25.0833C36.1644 18.97 31.1949 14 25.0822 14C18.9695 14 14 18.97 14 25.0833C14 31.1967 18.9695 36.1667 25.0822 36.1667C27.7186 36.1667 30.145 35.2333 32.0465 33.6933L40.014 41.6617C40.2356 41.8833 40.5272 42 40.8305 42C41.1338 42 41.4255 41.8833 41.6588 41.6617C42.1137 41.2067 42.1137 40.46 41.6588 40.005ZM25.0822 33.8333C20.2527 33.8333 16.3331 29.9133 16.3331 25.0833C16.3331 20.2533 20.2527 16.3333 25.0822 16.3333C29.9117 16.3333 33.8313 20.2533 33.8313 25.0833C33.8313 29.9133 29.9117 33.8333 25.0822 33.8333Z"
      //     fill="#A200F2"
      //   />
      // </svg>
    ),
    title: "?????????",
    cardColor: colors["purpleA"][100],
    borderColor: colors["purpleA"][200],
    iconColor: colors["purpleA"][1000],
    counter: 13
  },
  {
    logo: (
      <img src="/image/publicize10.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M17.0909 21C17.0909 17.136 20.1455 14 23.9091 14C27.6727 14 30.7273 17.136 30.7273 21C30.7273 24.864 27.6727 28 23.9091 28C20.1455 28 17.0909 24.864 17.0909 21ZM23.9091 29.4C17.8818 29.4 13 34.412 13 40.6V41.3C13 41.692 13.3 42 13.6818 42H34.1364C34.5182 42 34.8182 41.692 34.8182 41.3V40.6C34.8182 34.412 29.9364 29.4 23.9091 29.4ZM36.1818 25.2C38.4318 25.2 40.2727 23.31 40.2727 21C40.2727 18.69 38.4318 16.8 36.1818 16.8C33.9318 16.8 32.0909 18.69 32.0909 21C32.0909 23.31 33.9318 25.2 36.1818 25.2ZM34.1091 33.6H43C43 29.736 39.9455 26.6 36.1818 26.6C33.7273 26.6 31.6 27.93 30.4 29.932C31.8727 30.87 33.1409 32.116 34.1091 33.6Z"
      //     fill="#00BFA5"
      //   />
      // </svg>
    ),
    title: "Coupang eats",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 958
  },
  {
    logo: (
      <img src="/image/publicize11.jpg"/>

      // <svg
      //   width="56"
      //   height="56"
      //   viewBox="0 0 56 56"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M43.64 35.8333V17.0833C43.64 15.9306 42.7288 15 41.6 15H14.4C13.2712 15 12.36 15.9306 12.36 17.0833V35.8333H11V36.5278C11 38.4444 12.5232 40 14.4 40H41.6C43.4768 40 45 38.4444 45 36.5278V35.8333H43.64ZM42.28 35.8333H31.4V37.2222H24.6V35.8333H13.72V17.0833C13.72 16.6944 14.0192 16.3889 14.4 16.3889H41.6C41.9808 16.3889 42.28 16.6944 42.28 17.0833V35.8333Z"
      //     fill="#651DFF"
      //   />
      // </svg>
    ),
    title: "JEJU air",
    cardColor: colors["purpleB"][100],
    borderColor: colors["purpleB"][200],
    iconColor: colors["purpleB"][1000],
    counter: 621
  }
  // {
  //   logo: (
  //     <svg
  //       width="56"
  //       height="56"
  //       viewBox="0 0 56 56"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M42.9 11H12.1C10.938 11 10 11.9613 10 13.1522V36.1087C10 37.2996 10.938 38.2609 12.1 38.2609H29.824C29.978 38.2609 30.132 38.3183 30.258 38.4043L37.16 43.6987C37.398 43.8996 37.706 44 38 44C38.21 44 38.42 43.957 38.63 43.8565C39.106 43.6126 39.4 43.1104 39.4 42.5652V38.2609H42.9C44.062 38.2609 45 37.2996 45 36.1087V13.1522C45 11.9613 44.062 11 42.9 11ZM33.59 23.827L31.042 26.467L31.658 30.2404C31.756 30.8143 31.21 31.2735 30.734 31.0009L27.5 29.193L24.266 31.0009C23.79 31.2591 23.244 30.8143 23.342 30.2404L23.958 26.467L21.41 23.827C21.004 23.4109 21.214 22.6791 21.76 22.593L25.316 22.0478L26.94 18.5613C27.178 18.0448 27.85 18.0448 28.088 18.5613L29.712 22.0478L33.268 22.593C33.786 22.6791 33.996 23.4109 33.59 23.827Z"
  //         fill="#FF6F00"
  //       />
  //     </svg>
  //   ),
  //   title: "Growth Marketing Experiments",
  //   cardColor: colors["orange"][100],
  //   borderColor: colors["orange"][200],
  //   iconColor: colors["orange"][1000],
  //   counter: 1515
  // }
];
const ease = "cubic-bezier(0.2, 0, 0.38, 0.9)";

export default {
  avatar,
  colors,
  cards1,
  cards2,
  ease
};
