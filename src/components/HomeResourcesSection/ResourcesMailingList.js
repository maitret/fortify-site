import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import HomeSquareItem from "../HomeSquareItem"
import { meta, colors } from "../../theme"
import { Subscribe } from "../Paddle"
import "./ResourcesSection.scss"

const ResourcesMailingList = () => {
  const { register, handleSubmit } = useForm({ nativeValidation: true })
  const [didSubscribe, setDidSubscribe] = useState(null)

  const inputEl = useRef(register({ required: true }))
  const submitEl = useRef(null)
  const iconEl = useRef(null)

  const onMouseout = () => {
    iconEl.current.classList.remove("is-hovered")
    inputEl.current.classList.remove("is-hovered")
    submitEl.current.classList.remove("is-hovered")
  }

  const onMouseover = () => {
    iconEl.current.classList.add("is-hovered")
    inputEl.current.classList.add("is-hovered")
    submitEl.current.classList.add("is-hovered")
  }

  const handleContactUs = async (_, event) => {
    event.preventDefault()

    const [emailEntry] = Array.from(new FormData(event.target).entries())

    if (!emailEntry) return

    const status = await Subscribe(emailEntry[1])
    setDidSubscribe(status)
  }

  return (
    <HomeSquareItem
      backgroundColor="transparent"
      header="Join the mailing list"
      text="Get the latest product updates by joining our mailing list"
      onMouseEnter={onMouseover}
      onMouseLeave={onMouseout}
    >
      <div className="resources-mailing-list">
        <form onSubmit={handleSubmit(handleContactUs)}>
          <div css={{ display: "flex" }} className="field has-addons">
            <div className="control has-icons-left">
              <input
                type="text"
                name="email"
                type="email"
                className="input is-large"
                placeholder="Email address"
                ref={inputEl}
              />
              <span class="icon is-medium is-left">
                <i ref={iconEl} class="fas fa-envelope fa-lg"></i>
              </span>
            </div>
            <div className="control">
              <button
                type="submit"
                ref={submitEl}
                className="sign-up-button button is-large is-outlined"
              >
                {didSubscribe ? "Enrolled!" : "Sign up"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </HomeSquareItem>
  )
}

export default ResourcesMailingList
