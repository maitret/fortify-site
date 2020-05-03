import React, { useState, useMemo } from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import emailValidator from "email-validator"
import Paddle from "../Paddle"
import plans from "../../plans"
import { meta } from "../../theme"
import { globalWindow } from "../../utils/window"

const PricingForm = ({ onCheckoutSuccess, onCancel }) => {
  const [registeredDomains, setRegisteredDomains] = useState([])

  const plan = useMemo(
    () =>
      registeredDomains.length
        ? plans.productConfig[registeredDomains.length - 1]
        : undefined,
    [registeredDomains.length]
  )

  const {
    errors,
    setValue,
    register,
    getValues,
    handleSubmit,
    triggerValidation,
  } = useForm()

  const openCheckout = data => {
    globalWindow.Paddle.Checkout.open({
      ...(false ? { coupon: "" } : {}),
      email: data.emailAddress,
      successCallback: onCheckoutSuccess,
      product: plan.planId,
      passthrough: JSON.stringify({
        appName: meta.app.slug,
        domains: registeredDomains,
        productComms: !!data.productComms,
        generalComms: !!data.generalComms,
      }),
    })
  }

  const addDomain = async () => {
    const target = "domainNameSelector"
    const value = getValues()[target]

    const isValid = await triggerValidation(target)

    if (value && isValid) {
      setValue(target, "")
      setRegisteredDomains([...registeredDomains, value])
    }
  }

  return (
    <div className="has-box-shadow" style={{ padding: "1rem" }}>
      <Paddle />

      <h5 css={{ marginBottom: "1rem" }} className="is-size-5">
        Which domains do you want to enable?
      </h5>

      <form onSubmit={handleSubmit(openCheckout)}>
        <div className="field">
          <p className="help">
            Press Add Domain to enable additional domains with {meta.app.title}.
          </p>
          <div className="field has-addons has-text-left">
            <div className="control has-icons-left is-expanded">
              <input
                type="text"
                name="domainNameSelector"
                className="input"
                onBlur={addDomain}
                placeholder="yoursite.com"
                ref={register({
                  validate: {
                    atLeastOneDomain: name =>
                      !!name || !!registeredDomains.length,
                    validDomain: name =>
                      !name || name.split(".").filter(Boolean).length === 2,
                    notDuplicate: name => !registeredDomains.includes(name),
                  },
                })}
              />

              <span className="icon is-medium is-left">
                <i className="fas fa-globe" />
              </span>
            </div>

            <div className="control">
              <button
                type="button"
                className="button is-primary"
                onClick={addDomain}
              >
                Add Domain
              </button>
            </div>
          </div>
          {errors.domainNameSelector ? (
            errors.domainNameSelector.type === "validDomain" ? (
              <p className="help is-primary">
                Your domain should be formatted like <code>yoursite.com</code>
              </p>
            ) : errors.domainNameSelector.type === "notDuplicate" ? (
              <p className="help is-primary">
                That domain is already part of your plan.
              </p>
            ) : null
          ) : null}
          <div className="is-flex" style={{ minHeight: 42, flexWrap: "wrap" }}>
            {registeredDomains.map(domain => (
              <div key={domain} className="domain-tag">
                {domain}
                <div
                  className="tag-exit"
                  onClick={e => {
                    e.preventDefault()
                    setRegisteredDomains([
                      ...registeredDomains.slice(
                        0,
                        registeredDomains.indexOf(domain)
                      ),
                      ...registeredDomains.slice(
                        registeredDomains.indexOf(domain) + 1
                      ),
                    ])
                  }}
                >
                  <i className="fa fa-times"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="field has-text-left">
          <label className="label">Account email</label>
          <p className="help">
            Make sure we can contact you at this address. All correspondence
            will be sent here.
          </p>
          <div className="control has-icons-left is-expanded">
            <input
              type="text"
              name="emailAddress"
              placeholder="Email address to reach you"
              className="input"
              ref={register({
                required: true,
                validate: value => emailValidator.validate(value),
              })}
            />
            {errors.emailAddress && (
              <p className="help is-primary">
                A valid email address is required.
              </p>
            )}
            <span className="icon is-medium is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="b-checkbox is-primary">
            <input
              id="agreementCheckbox"
              name="agreementCheckbox"
              type="checkbox"
              className="styled"
              ref={register({ required: true })}
            />
            <label htmlFor="agreementCheckbox">
              <span className="is-size-6" style={{ paddingLeft: 6 }}>
                <span
                  className="is-size-6"
                  style={{ fontStyle: "italic", paddingLeft: 6 }}
                >
                  My website is on Cloudflare
                </span>{" "}
                and I agree to Network Chimp's{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/legal/terms-of-service"
                >
                  Terms of Service.
                </a>{" "}
                (required)
              </span>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="b-checkbox is-primary">
            <input
              id="productComms"
              name="productComms"
              type="checkbox"
              className="styled"
              ref={register({ required: false })}
            />
            <label htmlFor="productComms">
              <span className="is-size-6" style={{ paddingLeft: 6 }}>
                Inform me when new {meta.app.title} tips, features, and
                tutorials are released (recommended)
              </span>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="b-checkbox is-primary">
            <input
              id="generalComms"
              name="generalComms"
              type="checkbox"
              className="styled"
              ref={register({ required: false })}
            />
            <label htmlFor="generalComms">
              <span className="is-size-6" style={{ paddingLeft: 6 }}>
                Send me occasional emails about all Network Chimp products,
                promotions, and discounts
              </span>
            </label>
          </div>
        </div>

        <div
          css={{ marginTop: "2rem" }}
          className="level"
          style={{ justifyContent: "space-between" }}
        >
          <div className="level-right">
            <input
              type="submit"
              value="Continue"
              className="button is-primary is-medium"
              disabled={Object.keys(errors).length || !registeredDomains.length}
            />
            <button
              type="button"
              onClick={onCancel}
              css={{ marginLeft: "1rem" }}
              className="button is-primary is-medium is-outlined"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

PricingForm.propTypes = {
  onCheckoutSuccess: PropTypes.func.isRequired,
}

export default PricingForm
