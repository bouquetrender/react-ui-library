import React from 'react'
import t from 'prop-types'

import './index.less'

export interface AlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning'
}

export type KindMap = Record<Required<AlertProps>['kind'], string>

const prefixCls = 'bouquet-alert'

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
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
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
}

export default Alert