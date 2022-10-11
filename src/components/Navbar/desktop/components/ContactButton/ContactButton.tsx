import Link from "next/link"

export const ContactButton = ({ text }: {text: string}) => {
  return (
    <Link
      href="/contact"
    >
      <a>
        <div className="flex justify-center items-center gap-3 bg-teal600 px-4 py-2.5 rounded-lg text-neutral50 duration-300 hover:opacity-80 hover:translate-y-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-semibold">{text}</span>
        </div>
      </a>
    </Link>
  )
}
