import type { GeometryField } from '../../payload-types.js'

// import type { Geometry, Point } from 'geojson'
// type GeometryField = Record<string, Geometry | Record<string, Point>>

export const geometryDoc: Partial<GeometryField> = {
  point: {
    type: 'Point',
    coordinates: [-85.66814967389939, 42.96375377212962],
  },
  localizedPoint: {
    type: 'Point',
    coordinates: [-1.8181105784127851, 52.5631444829657],
  },
  polygon: {
    type: 'Polygon',
    coordinates: [
      [
        [-85.85354111759356, 43.07897272839432],
        [-85.85354111759356, 42.808619444127885],
        [-85.46610503572161, 42.808619444127885],
        [-85.46610503572161, 43.07897272839432],
        [-85.85354111759356, 43.07897272839432],
      ],
    ],
  },
  group: {
    point: {
      type: 'Point',
      coordinates: [-85.66814967389939, 42.96375377212962],
    },
  },
  // lineString: {
  //   type: 'LineString',
  //   coordinates: [
  //     [1, 2],
  //     [3, 4],
  //   ],
  // },
  // multiLineString: {
  //   type: 'MultiLineString',
  //   coordinates: [
  //     [
  //       [1, 2],
  //       [3, 4],
  //     ],
  //     [
  //       [5, 6],
  //       [7, 8],
  //     ],
  //   ],
  // },
  // multiPoint: {
  //   type: 'MultiPoint',
  //   coordinates: [
  //     [1, 2],
  //     [3, 4],
  //   ],
  // },
  // multiPolygon: {
  //   type: 'MultiPolygon',
  //   coordinates: [
  //     [
  //       [
  //         [1, 2],
  //         [3, 4],
  //         [5, 6],
  //         [1, 2],
  //       ],
  //     ],
  //     [
  //       [
  //         [7, 8],
  //         [9, 10],
  //         [11, 12],
  //         [7, 8],
  //       ],
  //     ],
  //   ],
  // },
}
