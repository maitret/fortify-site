import React, { useState } from "react"

const Notification = ({ visible, title, children }) => {
  const [dismiss, setDismiss] = useState(false)

  return (
    <article
      className="message is-primary"
      css={{
        position: "fixed",
        bottom: 0,
        right: 0,
        marginRight: "1rem",
        marginBottom: "1rem",
        maxWidth: "380px",
        opacity: visible && !dismiss ? 1 : 0,
        transition: "0.75s all",
        zIndex: 99999,
      }}
    >
      <div className="message-header">
        <p>{title}</p>
        <button
          onClick={() => setDismiss(true)}
          className="delete"
          aria-label="delete"
        />
      </div>
      <div className="message-body">{children}</div>
    </article>
  )
}

export default Notification
