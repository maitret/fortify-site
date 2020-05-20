export default async (params, token) => {
  const response = await fetch(
    "https://api-two-theta.now.sh/sites/extend-trial",
    {
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }),
      method: "POST",
      body: JSON.stringify({
        appName: "portzilla",
        socialType: "twitter",
        ...params,
      }),
    }
  )

  const result = await response.json()
  return result
}
