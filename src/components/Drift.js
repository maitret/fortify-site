import { useEffect, useState } from "react"
import { globalWindow } from "../utils/window"

export const useDrift = () => {
  const [driftApi, setDriftApi] = useState(null)

  useEffect(() => {
    globalWindow.drift &&
      globalWindow.drift.on("ready", function(api) {
        if (api && api.widget) {
          api.widget.hide()
          setDriftApi(api)
        }
      })
  }, [])

  useEffect(() => {
    if (!driftApi && globalWindow.drift) {
      setDriftApi(globalWindow.drift.api)
    }
  }, [driftApi])

  function openSidebar(event) {
    event.preventDefault()
    driftApi && driftApi.sidebar.open()
    return false
  }

  return [openSidebar, driftApi]
}
