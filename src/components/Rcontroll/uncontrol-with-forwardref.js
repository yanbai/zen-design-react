import React from "react"

export const Uncontrol = React.forwardRef((props, ref) => {
  const [checked, setChecked] = React.useState(
    "checked" in props ? props.checked : false,
  )
  const handleChange = e => {
    setChecked(e.target.checked)
  }
  return (
    <input
      type="checkbox"
      ref={ref}
      value={checked}
      onChange={handleChange}
    />
  )
})

Uncontrol.displayName = "Uncontrol"
