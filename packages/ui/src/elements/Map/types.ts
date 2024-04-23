import { ComponentProps, HTMLAttributes } from 'react'
import type { Map as MapLibreMap } from 'react-map-gl/maplibre'

export type Props = HTMLAttributes<HTMLDivElement> & {
  height?: string
  readOnly?: boolean
  options?: ComponentProps<typeof MapLibreMap>
}
