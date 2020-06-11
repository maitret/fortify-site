export default async ({ code, email, domain }) =>
  fetch(window.location.origin + "/api/users/activate", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      code,
      email,
      domain,
      appName: "fortify",
    }),
  })
