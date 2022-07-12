import React from "react"
import kwesforms from "kwesforms"

export default function KwesForm() {
  // kwesforms.init()
  return (
    <div>
      <form
        action="https://kwesforms.com/api/foreign/forms/BD4vXHgqNr3FVFLiSVVq"
        className="kwes-form"
      >
        <label for="name">Your Name</label>
        <input type="text" name="name" rules="required|max:255" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
