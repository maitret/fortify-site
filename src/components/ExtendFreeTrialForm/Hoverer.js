import { useRef } from "react"

export default ({ children, inputRef = null }) => {
  const iconEl = useRef(null)
  const labelEl = useRef(null)
  const inputEl = useRef(inputRef)

  return children({
    iconEl,
    inputEl,
    labelEl,
    onMouseLeave: () => {
      iconEl.current.classList.remove("is-hovered")
      inputEl.current.classList.remove("is-hovered")
      labelEl.current.classList.remove("is-hovered")
    },
    onMouseEnter: () => {
      iconEl.current.classList.add("is-hovered")
      inputEl.current.classList.add("is-hovered")
      labelEl.current.classList.add("is-hovered")
    },
  })
}
