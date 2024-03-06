import { findByIDOperation } from 'payload/operations'
import type { GeneratedTypes } from 'payload'
import type { PayloadRequest } from 'payload/types'
import type { Collection } from 'payload/types'

import { isolateObjectProperty } from 'payload/utilities'
import type { Context } from '../types.d.ts'

export type Resolver<T> = (
  _: unknown,
  args: {
    draft: boolean
    fallbackLocale?: string
    id: string
    locale?: string
  },
  context: {
    req: PayloadRequest
  },
) => Promise<T>

export default function findByIDResolver<T extends keyof GeneratedTypes['collections']>(
  collection: Collection,
): Resolver<GeneratedTypes['collections'][T]> {
  return async function resolver(_, args, context: Context) {
    let { req } = context
    const locale = req.locale
    const fallbackLocale = req.fallbackLocale
    req = isolateObjectProperty(req, 'locale')
    req = isolateObjectProperty(req, 'fallbackLocale')
    req.locale = args.locale || locale
    req.fallbackLocale = args.fallbackLocale || fallbackLocale

    const options = {
      id: args.id,
      collection,
      depth: 0,
      draft: args.draft,
      req: isolateObjectProperty(req, 'transactionID'),
    }

    const result = await findByIDOperation(options)

    return result
  }
}
