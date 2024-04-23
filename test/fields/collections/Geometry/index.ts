import type { CollectionConfig } from 'payload/types'

import { geometryFieldsSlug } from '../../slugs.js'

const GeometryFields: CollectionConfig = {
  slug: geometryFieldsSlug,
  admin: {
    useAsTitle: 'geometry',
  },
  versions: true,
  fields: [
    {
      name: 'point',
      type: 'geometry',
      label: 'Point',
      required: true,
      geojsonTypes: ['Point'],
    },
    {
      name: 'localizedPoint',
      type: 'geometry',
      label: 'Localized Point',
      geojsonTypes: ['Point'],
      unique: true,
      localized: true,
    },
    {
      name: 'polygon',
      type: 'geometry',
      label: 'Polygon',
      required: true,
      geojsonTypes: ['Polygon'],
    },
    {
      type: 'group',
      name: 'group',
      fields: [
        {
          name: 'point',
          type: 'geometry',
          geojsonTypes: ['Point'],
        },
      ],
    },
    // {
    //   name: 'lineString',
    //   type: 'geometry',
    //   label: 'LineString',
    //   required: true,
    //   geojsonTypes: ['LineString'],
    // },
    // {
    //   name: 'multiLineString',
    //   type: 'geometry',
    //   label: 'MultiLineString',
    //   required: true,
    //   geojsonTypes: ['MultiLineString'],
    // },
    // {
    //   name: 'multiPoint',
    //   type: 'geometry',
    //   label: 'MultiPoint',
    //   required: true,
    //   geojsonTypes: ['MultiPoint'],
    // },
    // {
    //   name: 'multiPolygon',
    //   type: 'geometry',
    //   label: 'MultiPolygon',
    //   required: true,
    //   geojsonTypes: ['MultiPolygon'],
    // },
  ],
}

export default GeometryFields
