import React from 'react'
import './Alert.css'
const Alert = (props) => {
  return (
        props.alert && ( <div className={`alert alertstyle alert-${props.alert.type}`} role="alert">
               <strong>{props.alert.message}</strong>
            </div>)
  )
}

export default Alert
