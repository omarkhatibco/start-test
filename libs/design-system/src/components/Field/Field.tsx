'use client'

import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { Field } from '@ark-ui/react/field'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Field.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Field.Root, 'root')

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, Field.LabelProps>
>(Field.Label, 'label')

export const HelperText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Field.HelperTextProps>
>(Field.HelperText, 'helperText')

export const ErrorText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Field.ErrorTextProps>
>(Field.ErrorText, 'errorText')

export const Input = withContext<
	HTMLInputElement,
	Assign<JsxStyleProps, Field.InputProps>
>(Field.Input, 'input')

export const Textarea = withContext<
	HTMLTextAreaElement,
	Assign<JsxStyleProps, Field.TextareaProps>
>(Field.Textarea, 'textarea')

export const Select = withContext<
	HTMLSelectElement,
	Assign<JsxStyleProps, Field.SelectProps>
>(Field.Select, 'select')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HTMLArkProps<'div'>>
>(ark.div, 'control')

export const ControlPrefix = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HTMLArkProps<'div'>>
>(ark.div, 'controlPrefix')

export const ControlSuffix = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HTMLArkProps<'div'>>
>(ark.div, 'controlSuffix')

export {
	FieldContext as Context,
	useFieldContext,
} from '@ark-ui/react/field'
