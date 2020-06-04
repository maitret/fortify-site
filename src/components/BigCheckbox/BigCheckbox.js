import React, { useState } from "react"

import "./BigCheckbox.scss"

const BigCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="big-checkbox">
      <div className="big">
        <input
          onClick={() => setIsChecked(!isChecked)}
          type="checkbox"
          name="checkbox_4"
          id="hh"
        />
        <label for="hh">{label}</label>
      </div>
      <div className="bottom-text">
        {isChecked && (
          <>
            Toggle a maintenance page on any route on your domain in one click,
            plus make your site never go offline. See the{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://www.networkchimp.com/tutorials/fortify.html"
            >
              demo
            </a>
            .
          </>
        )}
      </div>
    </div>
  )
}

export default BigCheckbox
