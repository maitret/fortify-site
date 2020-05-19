import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import Hoverer from "./Hoverer"
import "./ExtendFreeTrialForm.scss"

export default () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    debugger
    return {
      twitterUsername: data.twitterUsername,
      accountEmail: data.accountEmail,
      tweetLink: data.tweetLink,
      agreementCheckbox: data.agreementCheckbox,
    }
  }

  return (
    <form className="extend-free-trial" onSubmit={handleSubmit(onSubmit)}>
      <Hoverer inputRef={register({ required: true })}>
        {({ onMouseEnter, onMouseLeave, iconEl, inputEl, labelEl }) => (
          <div className="field">
            <label ref={labelEl} className="label">
              Twitter username
            </label>
            <div
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
              className="control has-icons-left"
            >
              <input
                type="text"
                className="input"
                placeholder="NetworkChimp"
                name="twitterUsername"
                ref={inputEl}
              />
              <span ref={iconEl} className="icon is-small is-left">
                <i className="fab fa-twitter"></i>
              </span>
            </div>
          </div>
        )}
      </Hoverer>

      <Hoverer inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}>
        {({ onMouseEnter, onMouseLeave, iconEl, inputEl, labelEl }) => (
          <div className="field">
            <label ref={labelEl} className="label">
              Network Chimp account email
            </label>
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="control has-icons-left has-icons-right"
            >
              <input
                type="email"
                name="accountEmail"
                placeholder="support@networkchimp.com"
                className={`input ${errors.accountEmail ? "is-danger" : ""}`}
                ref={inputEl}
              />
              <span ref={iconEl} className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        )}
      </Hoverer>

      <Hoverer inputRef={register({ required: true })}>
        {({ onMouseEnter, onMouseLeave, iconEl, inputEl, labelEl }) => (
          <div
            className="field"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <label ref={labelEl} className="label">
              Link to Tweet
            </label>
            <div className="control has-icons-left">
              <input
                type="url"
                name="tweetLink"
                placeholder="twitter.com/NetworkChimp/status/1258087204749860864"
                className="input"
                ref={inputEl}
              />
              <span ref={iconEl} className="icon is-small is-left">
                <i className="fas fa-link"></i>
              </span>
            </div>
          </div>
        )}
      </Hoverer>

      <div
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        className="field"
      >
        <div className="control">
          <div className="b-checkbox is-primary">
            <input
              id="agreementCheckbox"
              name="agreementCheckbox"
              type="checkbox"
              className="styled"
              ref={register({ required: true })}
            />
            <label htmlFor="agreementCheckbox">
              <span
                className="is-size-6"
                style={{ color: "hsl(233, 15%, 67%)", paddingLeft: 6 }}
              >
                I agree to Network Chimp's{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/legal/terms-of-service"
                >
                  Terms of Service.
                </a>{" "}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="control">
        <button type="submit" className="button is-link">
          Submit
        </button>
      </div>
    </form>
  )
}
