export const ExitSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 36 38"
    height="90%"
  >
    <defs>
      <linearGradient id="a">
        <stop offset={0} stopColor="#f9cc84" />
        <stop offset={1} stopColor="#fed27f" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={32}
        x2={27.857}
        y1={16.238}
        y2={47.922}
        gradientTransform="rotate(180 32 32)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3ac39" stopOpacity={0.629} />
        <stop offset={1} stopColor="#fcba94" stopOpacity={0.783} />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="d"
        x1={32}
        x2={27.857}
        y1={16.238}
        y2={47.922}
        gradientTransform="rotate(180 32.014 32)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#a"
        id="e"
        x1={36.312}
        x2={30.302}
        y1={47.962}
        y2={16.238}
        gradientTransform="rotate(180 31.996 31.981)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="b"
        cx={-18.3}
        cy={0.405}
        r={17.1}
        gradientTransform="matrix(-.1316 1.117 -1.0576 -.12462 33.357 39.585)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f0d81f" />
        <stop offset={1} stopColor="#f07d0a" />
      </radialGradient>
    </defs>
    <path
      fill="#a54005"
      d="M28 37c1 0 1-1 1-1V19c1-.049 5 0 5 0 .447-.009.846-.109 1.016-.523s.077-.889-.235-1.209l-16-16a1.122 1.122 0 0 0-1.562 0l-16 16c-.312.32-.405.795-.235 1.209S1.553 18.991 2 19h5v17.049s0 1 1 1c6 0 14-.049 20-.049z"
    />
    <path
      fill="url(#b)"
      d="M41.781 15.156c-5.903.002-13.643.061-19.562.063V32a1.22 1.22 0 0 1-1.157 1.219c-1.093.053-4.057.008-4.624 0L32 48.781l15.531-15.562H43A1.22 1.22 0 0 1 41.781 32V15.156z"
      transform="rotate(180 25 25.5)"
    />
    <path
      fill="url(#c)"
      d="M23 47c.906 1.031 17 1 18 0s-.122-14.11-.094-15C41 29 45 31 44 29c-2-3-11-12-12-12s-10 9-12 12c-1 2 3 0 3.094 3 .029.935-1.188 14.031-.094 15z"
      transform="translate(-14 -13)"
    />
    <path
      fill="url(#d)"
      d="M44.027 29c-2-3-11-12-12-12S25 22.459 23 25.502c.973 0 4-3.502 9-3.502 4 0 9 9 12.027 7z"
      transform="translate(-14 -13)"
    />
    <path
      fill="url(#e)"
      d="M31.965 47.724c4.262-.004 8.531-.25 9.031-.75.699-.698.4-6.176.157-10.188C41 34 41 34 40 37c-3.493 10.479-16.082 8.316-17.41 7.943.063 1.007.175 1.826.406 2.031.454.515 4.707.754 8.969.75z"
      transform="translate(-14 -13)"
    />
  </svg>
)