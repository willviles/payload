// NOTE: Custom data type declaration only required
// until geometry fields are supported in Drizzle ORM

import { sql } from 'drizzle-orm'
import { customType } from 'drizzle-orm/pg-core'
import type { Geometry, Point } from 'geojson'
import wkx from 'wkx'

type GeometryOptions = { type?: string; srid?: string }

const dataType = (options?: GeometryOptions) => {
  let result = 'GEOMETRY'
  if (options?.type) {
    result += `(${options.type.toUpperCase()}`
    if (options?.srid) {
      result += `,${options.srid}`
    }

    result += ')'
  }

  return result
}

const toDriver = (value: Geometry) => {
  return sql`ST_GeomFromGeoJSON(${JSON.stringify(value)})`
}

const fromDriver = (value: string) => {
  const b = Buffer.from(value, 'hex')
  return wkx.Geometry.parse(b).toGeoJSON({ shortCrs: true }) as Geometry
}

export const geometry = (name: string, options?: GeometryOptions) =>
  customType<{
    data: Geometry
    config: GeometryOptions
    driverData: string
  }>({
    dataType,
    toDriver,
    fromDriver,
  })(name, options)

type PointOptions = Omit<GeometryOptions, 'type'>
type LatLng = { lat: number; lng: number }

export const point = (name: string, options?: PointOptions) =>
  customType<{
    data: LatLng
    config: PointOptions
    driverData: string
  }>({
    dataType: (options) => dataType({ type: 'Point', ...options }),
    toDriver: ({ lat, lng }: LatLng) =>
      toDriver({
        type: 'Point',
        coordinates: [lng, lat],
      }),
    fromDriver: (value) => {
      const [lng, lat] = (fromDriver(value) as Point).coordinates
      return { lat, lng }
    },
  })(name, options)
