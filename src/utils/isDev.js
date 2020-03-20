import { globalWindow } from "./window"

export default () =>
  globalWindow && globalWindow.location.href.includes("//localhost")
