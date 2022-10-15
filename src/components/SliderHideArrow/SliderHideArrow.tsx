import { CSSProperties, MouseEventHandler } from "react"

export interface IArrowProps {
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const SliderHideArrow = ({ className, style, onClick }: IArrowProps) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  )
}
