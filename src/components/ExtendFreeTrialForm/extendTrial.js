export default async (params, token) =>
  fetch(window.location.origin + "/api/sites/extend-trial", {
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
      appName: "edgy",
      socialType: "twitter",
      ...params,
    }),
  })
