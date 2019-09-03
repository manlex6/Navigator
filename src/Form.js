import React from 'react'
import propTypes from 'prop-types'

var Text = () => {
  return <input></input>
}

var Group = element => {
  return (
    <div>
      <h3>Group</h3>
      <div>{element.elements.map(createElement)}</div>
    </div>
  )
}

var createElement = element => {
  switch (element.type) {
    case 'text':
      return Text(element)

    case 'group':
      return Group(element)

    default:
      break
  }
}

const Form = ({ data }) => {
  return <div>{data.elements.map(createElement)}</div>
}
Form.propTypes = {
  data: propTypes.object.isRequired
}

export default Form
