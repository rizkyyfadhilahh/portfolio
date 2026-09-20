export const DomoIcon = ({ className = "", style, ...props }) => (
  <svg
    viewBox="0 0 1000 264"
    fill="currentColor"
    role="img"
    aria-label="DOMO"
    className={className}
    style={{ height: 14, width: 53, ...style }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 0H90A132 132 0 0 1 90 264H0ZM43 43V221H90A88.5 88.5 0 0 0 90 43Z"
    />
    <path
      fillRule="evenodd"
      d="M215 132a131 131 0 1 0 262 0a131 131 0 1 0-262 0ZM258.5 132a87.5 87.5 0 1 0 175 0a87.5 87.5 0 1 0-175 0Z"
    />
    <path d="M475 0L607 131L739 0V264H695V105L607 193L519 105V264H475Z" />
    <path
      fillRule="evenodd"
      d="M737 132a131 131 0 1 0 262 0a131 131 0 1 0-262 0ZM780.5 132a87.5 87.5 0 1 0 175 0a87.5 87.5 0 1 0-175 0Z"
    />
  </svg>
);
