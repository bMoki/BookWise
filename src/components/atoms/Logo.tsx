interface Props {
  size?: 'lg' | 'md'
}

export function Logo({ size = 'md' }: Props) {
  return (
    <div className="flex justify-center items-center gap-2">
      <svg
        className="shrink-0 relative overflow-visible"
        style={{}}
        width={size === 'md' ? 24 : 48}
        height={size === 'md' ? 24 : 48}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 23.3L18.4 22.8C16.4 20.9 15 19.7 15 18.2C15 17 16 16 17.2 16C17.9 16 18.6 16.3 19 16.8C19.4 16.3 20.1 16 20.8 16C22 16 23 16.9 23 18.2C23 19.7 21.6 20.9 19.6 22.8L19 23.3Z"
          fill="#50B2C0"
        />
        <path
          d="M18 2C19.1 2 20 2.9 20 4V13.08L19 13L18 13.08V4H13V12L10.5 9.75L8 12V4H6V20H13.08C13.2 20.72 13.45 21.39 13.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H18Z"
          fill="#8381D9"
        />
      </svg>
      <h1
        className={`font-semibold leading-base ${
          size === 'md' ? 'text-xl' : 'text-4xl'
        } font-bold bg-clip-text text-transparent truncate bg-gradient-to-r from-green-50 to-purple-50`}
      >
        BookWise
      </h1>
    </div>
  )
}
