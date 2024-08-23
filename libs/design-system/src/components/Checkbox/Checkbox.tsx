'use client'

import type { Assign } from '@ark-ui/react'
import { Checkbox } from '@ark-ui/react/checkbox'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Checkbox.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	Checkbox.Root,
	'root',
)

export interface GroupProps
	extends Assign<JsxStyleProps, Checkbox.GroupProps>,
		VariantsProps {}

export const Group = withProvider<HTMLDivElement, RootProps>(
	Checkbox.Group,
	'group',
)

export const Label = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Checkbox.LabelProps>
>(Checkbox.Label, 'label')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Checkbox.ControlProps>
>(Checkbox.Control, 'control')

export const Indicator = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Checkbox.IndicatorProps>
>(Checkbox.Indicator, 'indicator')

export {
	CheckboxContext as Context,
	type CheckboxContextProps as ContextProps,
	CheckboxHiddenInput as HiddenInput,
	type CheckboxHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/checkbox'
