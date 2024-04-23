'use client'

import React from 'react'

import type { Props } from './types.js'

import { Map as MapLibreMap, Source, Layer } from 'react-map-gl/maplibre'
import type { Geometry as GeometryType } from 'geojson'

import { useTheme } from '../../providers/Theme/index.js'
// import { ShimmerEffect } from '../ShimmerEffect/index.js'
import './index.scss'

const baseClass = 'map'

const Map: React.FC<Props> = (props) => {
  const { className, height, options, readOnly, style, ...rest } = props

  const { theme } = useTheme()

  const classes = [baseClass, className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={{ ...style, height }}>
      <MapLibreMap
        {...options}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        {/* {value?.type && (
          <Source type="geojson" data={value}>
            <Layer type="fill" paint={{ 'fill-color': '#000000' }} />
          </Source>
        )} */}
      </MapLibreMap>
    </div>
  )
}

// eslint-disable-next-line no-restricted-exports
export default Map
