import React from 'react'
import t from 'prop-types'

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: 'info' | 'success' | 'error' | 'warning'
}

export type KindMap = Record<Required<AlertProps>['kind'], string>

const prefixCls = 'bouquet-alert'

const kinds: KindMap = {
  info: '#9ab7e0',
  success: '#97e3c1',
  warning: '#ffe99b',
  error: '#ff8888',
}

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
)

Alert.propTypes = {
  kind: t.oneOf(['info', 'success', 'error', 'warning']),
}

export default Alert