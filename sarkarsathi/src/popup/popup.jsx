import { useState } from "react"
import Auth from "./Auth"
import Dashboard from "./Dashboard"
import Chat from "./Chat"

export default function Popup() {
  const [screen, setScreen] = useState("auth")

  if (screen === "auth")
    return <Auth onLogin={() => setScreen("dashboard")} />

  if (screen === "chat")
    return <Chat onBack={() => setScreen("dashboard")} />

  return (
    <Dashboard
      onFill={() => alert("Fill form triggered")}
      onUpload={() => alert("Upload docs triggered")}
      onOpenChat={() => setScreen("chat")}
    />
  )
}
