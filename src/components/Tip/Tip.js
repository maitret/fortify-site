import React from "react"

const Tip = ({ type = "tip", title, children }) => (
  <div
    css={{
      padding: "1rem 1.5rem",
      borderLeftWidth: "0.5rem",
      borderLeftStyle: "solid",
      marginTop: "2rem",
      marginBottom: "2rem",
      ...(type === "tip"
        ? {
            backgroundColor: "#e7e7e7",
            borderColor: "#42b983",
          }
        : type === "warning"
        ? {
            backgroundColor: "rgba(255, 229, 100, 0.3)",
            borderColor: "#e7c000",
            color: "#6b5900",
          }
        : type === "danger"
        ? {
            backgroundColor: "#ffe6e6",
            borderColor: "#c00",
            color: "#4d0000",
          }
        : {}),
    }}
  >
    {title && (
      <p
        css={{
          fontWeight: 600,
          marginBottom: "-0.4rem",
          ...(type === "warning"
            ? {
                color: "#b29400",
              }
            : type === "danger"
            ? {
                color: "#900",
              }
            : {}),
        }}
      >
        {title}
      </p>
    )}
    <p>{children}</p>
  </div>
)

export default Tip
