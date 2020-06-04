import psl from "psl"
import React, { useState } from "react"
import { Magic } from "magic-sdk"
import { useForm } from "react-hook-form"
import extendTrial from "./extendTrial"

import "./ExtendFreeTrialForm.scss"

const magicLinkKey = "pk_live_00EED89B6FC22076"

export default () => {
  const { register, handleSubmit, formState, errors } = useForm()
  const [outcome, setOutcome] = useState(null)

  const onSubmit = async data => {
    const magic = new Magic(magicLinkKey)
    const token = await magic.auth.loginWithMagicLink({
      email: data.accountEmail,
    })

    let message = ""

    setOutcome(message)

    try {
      const response = await extendTrial(data, token)

      let result
      if (response.headers.get("content-type") === "application/json") {
        result = await response.json()
      }

      message =
        "Sit tight! We received your free trial extension request and usually respond within 1-3 hours."

      if (response.status !== 200) {
        switch (result.code) {
          case "ALREADY_EXTENDED":
            message = "You can only extend your trial one time per domain."
            break
          case "NO_FREE_TRIAL":
            message = `Your free trial isn't activated.`
            break
          case "BAD_TWEET":
            message = `Something looks a little off.  It should be an awesome tweet that mentions Fortify.`
            break
          default:
            message = `We didn't recognize that.`
            break
        }
      }
    } catch (error) {
      message = `Something broke.  Contact us at support@networkchimp.com and we'll get right on it.`
    }

    setOutcome(message)
  }

  return (
    <form className="extend-free-trial" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Account email</label>
        <label className="sublabel">
          The email address associated with your{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://dash.cloudflare.com/?zone=apps/fortify/install"
          >
            Fortify app
          </a>{" "}
          on the Cloudflare dashboard.
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            type="email"
            name="accountEmail"
            placeholder="support@networkchimp.com"
            className={`input ${errors.accountEmail ? "is-danger" : ""}`}
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Domain to extend trial on</label>
        <label className="sublabel">
          Fortify should be installed on this domain.
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            type="text"
            className="input"
            name="domain"
            placeholder="networkchimp.com"
            ref={register({
              required: true,
              validate: name => {
                if (!name) return true

                const parsedDomain = psl.parse(name)

                return (
                  name.split("/").length === 1 &&
                  !!parsedDomain.domain &&
                  !parsedDomain.subdomain
                )
              },
            })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </span>
        </div>
        {errors.domain && (
          <p className="help is-primary">
            Your domain should be formatted like <code>yoursite.com</code>
          </p>
        )}
      </div>

      <div className="field">
        <label className="label">Link to Tweet</label>
        <label className="sublabel">
          Link to your tweet that mentions Fortify.
        </label>
        <div className="control has-icons-left">
          <input
            type="url"
            name="tweetLink"
            placeholder="https://twitter.com/NetworkChimp/status/1258087204749860864"
            className="input"
            ref={register({
              required: true,
              validate: href => {
                try {
                  const url = new URL(href)
                  const [_, status, id] = url.pathname
                    .split("/")
                    .filter(Boolean)

                  return (
                    Number.isInteger(+id) ||
                    status === "status" ||
                    url.hostname === "twitter.com"
                  )
                } catch (err) {
                  return false
                }
              },
            })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-link"></i>
          </span>
        </div>
        {errors.domain && (
          <p className="help is-primary">
            This should be a valid link to your trial extension tweet
          </p>
        )}
      </div>

      <div
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        className="field"
      >
        <div className="control">
          <div className="b-checkbox">
            <input
              type="checkbox"
              className="styled"
              id="agreementCheckbox"
              name="agreementCheckbox"
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
                  href="https://networkchimp.com/terms-of-service.html"
                >
                  Terms of Service.
                </a>{" "}
              </span>
            </label>
          </div>
        </div>
        {errors.agreementCheckbox && (
          <p className="help is-primary">
            You must agree to our Terms of Service
          </p>
        )}
      </div>
      <div className="control">
        <button
          type="submit"
          className="button is-primary"
          disabled={Object.keys(errors).length || !formState.dirty}
        >
          Extend my free trial
        </button>
      </div>

      {outcome && (
        <div className="notification is-info" css={{ marginTop: "2rem" }}>
          {outcome}
        </div>
      )}
    </form>
  )
}
