import React from 'react'
import Alert from '../index'
import '../style'

export default () => {

  return (
    <>
      <Alert kind="info">这是一条提示</Alert>
      <br/>
      <Alert kind="success">这是一条成功提示</Alert>
      <br/>
      <Alert kind="warning">这是一条告警提示</Alert>
      <br/>
      <Alert kind="error">这是一条错误提示</Alert>
    </>
  )
}
