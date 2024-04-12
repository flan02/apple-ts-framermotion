import { twMerge } from "tailwind-merge"


type Props = {
  children: React.ReactNode
  className?: string
  size?: "small" | "medium" | "large"
}

const Button = ({ children, className, size = "medium" }: Props) => {
  const sizes = {
    small: "px-2 py-1 text-xs", // ? 12px
    medium: "px-5 py-3 text-sm", // ? 14px
    large: "px-8 py-4 text-lg", // ? 16px

  }
  return (
    <div className={twMerge("bg-white text-black rounded-full px-3 py-1", sizes[size])}>
      {children}
    </div>
  )
}

export default Button