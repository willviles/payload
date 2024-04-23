/* eslint-disable react/destructuring-assignment */
'use client'
import type { ClientValidate, FieldBase } from 'payload/types'

import { getTranslation } from '@payloadcms/translations'
import React, { useCallback } from 'react'

import { Map } from '../../elements/Map/index.js'
import { useField } from '../../forms/useField/index.js'
import { withCondition } from '../../forms/withCondition/index.js'
import { useTranslation } from '../../providers/Translation/index.js'
import { fieldBaseClass } from '../shared/index.js'
import type { Geometry as GeometryType } from 'geojson'

import './index.scss'

const baseClass = 'geometry'

import { FieldDescription } from '@payloadcms/ui/forms/FieldDescription'
import { FieldError } from '@payloadcms/ui/forms/FieldError'
import { FieldLabel } from '@payloadcms/ui/forms/FieldLabel'
import { useFieldProps } from '@payloadcms/ui/forms/FieldPropsProvider'

import type { FormFieldBase } from '../shared/index.js'

export type GeometryFieldProps = FormFieldBase & {
  label?: FieldBase['label']
  name?: string
  path?: string
  placeholder?: string
  width?: string
}

const GeometryField: React.FC<GeometryFieldProps> = (props) => {
  const {
    name,
    label,
    AfterInput,
    BeforeInput,
    CustomDescription,
    CustomError,
    CustomLabel,
    className,
    descriptionProps,
    errorProps,
    labelProps,
    path: pathFromProps,
    placeholder,
    readOnly: readOnlyFromProps,
    required,
    style,
    validate,
    width,
  } = props

  const { i18n, t } = useTranslation()

  const memoizedValidate: ClientValidate = useCallback(
    (value, options) => {
      if (typeof validate === 'function') {
        return validate(value, { ...options, required })
      }
    },
    [validate, required],
  )

  const { path: pathFromContext, readOnly: readOnlyFromContext } = useFieldProps()
  const readOnly = readOnlyFromProps || readOnlyFromContext

  const { path, setValue, showError, value } = useField<GeometryType>({
    path: pathFromContext || pathFromProps || name,
    validate: memoizedValidate,
  })

  console.log({ value })

  return (
    <div
      className={[
        fieldBaseClass,
        baseClass,
        className,
        showError && 'error',
        readOnly && 'read-only',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...style,
        width,
      }}
    >
      <FieldError CustomError={CustomError} path={path} {...(errorProps || {})} />
      <FieldLabel
        CustomLabel={CustomLabel}
        label={label}
        required={required}
        {...(labelProps || {})}
      />
      {BeforeInput}
      <div>{JSON.stringify(value)}</div>
      <Map />
      {/* <input
        disabled={readOnly}
        id={`field-longitude-${path.replace(/\./g, '__')}`}
        name={`${path}.longitude`}
        onChange={(e) => handleChange(e, 0)}
        placeholder={getTranslation(placeholder, i18n)}
        type="number"
        value={value && typeof value[0] === 'number' ? value[0] : ''}
      /> */}
      {AfterInput}
      {CustomDescription !== undefined ? (
        CustomDescription
      ) : (
        <FieldDescription {...(descriptionProps || {})} />
      )}
    </div>
  )
}

export const Geometry = withCondition(GeometryField)
