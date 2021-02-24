import React from "react"

export default function Checkbox(props) {
  return (
    <div>
      <label>control: </label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  )
}
