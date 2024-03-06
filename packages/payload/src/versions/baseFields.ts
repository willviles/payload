import type { Field } from '../fields/config/types.d.ts'

import { extractTranslations } from '../translations/extractTranslations.js'

const labels = extractTranslations(['version:draft', 'version:published', 'version:status'])

export const statuses = [
  {
    label: labels['version:draft'],
    value: 'draft',
  },
  {
    label: labels['version:published'],
    value: 'published',
  },
]

const baseVersionFields: Field[] = [
  {
    name: '_status',
    type: 'select',
    admin: {
      components: {
        Field: () => null,
      },
      disableBulkEdit: true,
    },
    defaultValue: 'draft',
    label: labels['version:status'],
    options: statuses,
  },
]

export default baseVersionFields
