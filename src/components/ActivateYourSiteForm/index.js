import psl from "psl"
import { useForm } from "react-hook-form"
import React, { useState, useEffect, useRef } from "react"
import activateSite from "./activateSite"

import "./ActivateYourSiteForm.scss"

export default ({ initialState }) => {
  const submitRef = useRef()

  const { reset, register, handleSubmit, setValue, errors } = useForm()
  const [outcome, setOutcome] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (initialState.code && initialState.email && initialState.domain) {
      Object.keys(initialState).forEach(key => {
        setValue(key, initialState[key])
      })

      if (submitRef.current) {
        handleSubmit(onSubmit)()
      }
    }
  }, [reset, initialState])

  const onSubmit = async data => {
    let message = ""

    setOutcome(message)
    setIsLoading(true)

    try {
      const response = await activateSite(data)

      let result
      if (response.headers.get("content-type") === "application/json") {
        result = await response.json()
      }

      message = `Your free trial of Fortify on ${data.domain} has been activated.`

      if (response.status !== 200) {
        switch (result.code) {
          default:
            message = `We didn't recognize that.`
            break
        }
      }
    } catch (error) {
      message = `Something broke.  Contact us at support@networkchimp.com and we'll get right on it.`
    }

    setIsLoading(false)
    setOutcome(message)
  }

  return (
    <form className="activate-your-site" onSubmit={handleSubmit(onSubmit)}>
      {outcome && (
        <div className="notification is-info" css={{ marginBottom: "2rem" }}>
          {outcome}
        </div>
      )}
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
            name="email"
            placeholder="support@networkchimp.com"
            className={`input ${errors.email ? "is-danger" : ""}`}
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Domain to activate</label>
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
        <label className="label">Activation code</label>
        <label className="sublabel">
          The code found in your activation email.
        </label>
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            name="code"
            placeholder="a4g2e"
            ref={register({
              required: true,
            })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-code"></i>
          </span>
        </div>
      </div>

      <div className="control">
        <button
          ref={submitRef}
          type="submit"
          className={`button is-primary ${isLoading && "is-loading"}`}
          disabled={Object.keys(errors).length}
        >
          Activate my site
        </button>
      </div>
    </form>
  )
}
