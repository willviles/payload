import type { SerializedListItemNode } from '@lexical/list'

import type { SlateNodeConverter } from '../../types.js'

import { convertSlateNodesToLexical } from '../../index.js'

export const _SlateListItemConverter: SlateNodeConverter = {
  converter({ childIndex, converters, slateNode }) {
    return {
      type: 'listitem',
      checked: undefined,
      children: convertSlateNodesToLexical({
        canContainParagraphs: false,
        converters,
        parentNodeType: 'listitem',
        slateNodes: slateNode.children,
      }),
      direction: 'ltr',
      format: '',
      indent: 0,
      value: childIndex + 1,
      version: 1,
    } as const as SerializedListItemNode
  },
  nodeTypes: ['li'],
}
