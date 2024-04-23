import React, { Suspense, lazy } from 'react'

import type { Props } from './types.js'

import { ShimmerEffect } from '../ShimmerEffect/index.js'

const LazyMap = lazy(() => import('./Map.js'))

export type { Props }

export const Map: React.FC<Props> = (props) => {
  const { height = '35vh' } = props

  return (
    <Suspense fallback={<ShimmerEffect height={height} />}>
      <LazyMap {...props} height={height} />
    </Suspense>
  )
}
