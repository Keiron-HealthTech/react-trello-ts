import React, {FC, HTMLAttributes, PropsWithChildren} from 'react'

import {LaneFooter as _LaneFooter} from '../../styles/Base'
import {CollapseBtn, ExpandBtn} from '../../styles/Elements'

export type LaneFooterComponent = LaneFooterProps & {[key: string]: any}

export interface LaneFooterProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
  [key: string]: any
}
export const LaneFooter: FC<PropsWithChildren<LaneFooterComponent>> = ({onClick, onKeyDown, collapsed}) => (
  <_LaneFooter onClick={onClick} onKeyDown={onKeyDown}>
    {collapsed ? <ExpandBtn /> : <CollapseBtn />}
  </_LaneFooter>
)
