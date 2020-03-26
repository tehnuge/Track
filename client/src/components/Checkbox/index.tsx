import { Field, ErrorMessage } from 'formik'
import React from 'react'
interface CheckboxProps {
  disabled?: boolean
  footnote?: string
  label?: string
  name: string
  type?: string
}
const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { 
    disabled = false, 
    footnote,
    label,
    name
  } = props
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        disabled={disabled}
        name={name}
        type="checkbox"
      />
      <small className="form-text text-muted">{footnote}</small>

      <ErrorMessage 
        name={name}
        className="invalid-feedback"
        component="div"
      />
    </div>
  )
}
export default Checkbox