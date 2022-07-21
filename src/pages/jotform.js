import React from "react"
import { Helmet } from "react-helmet"

export default function Jotform() {
  return (
    <div>
      <iframe
        id="JotFormIFrame-222005890973054"
        title="Form"
        onload="window.parent.scrollTo(0,0)"
        allowTransparency="true"
        allowFullScreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/222005890973054"
        frameBorder={0}
        style={{ minWidth: "100%", height: "100vh", border: "none" }}
        scrolling="no"
      ></iframe>
    </div>
  )
}
