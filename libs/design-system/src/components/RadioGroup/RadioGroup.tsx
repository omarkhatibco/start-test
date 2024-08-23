'use client'

import type { Assign } from '@ark-ui/react'
import { RadioGroup } from '@ark-ui/react/radio-group'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, RadioGroup.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	RadioGroup.Root,
	'root',
)

export const Indicator = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, RadioGroup.IndicatorProps>
>(RadioGroup.Indicator, 'indicator')

export const ItemControl = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, RadioGroup.ItemControlProps>
>(RadioGroup.ItemControl, 'itemControl')

export const Item = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, RadioGroup.ItemProps>
>(RadioGroup.Item, 'item')

export const ItemText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, RadioGroup.ItemTextProps>
>(RadioGroup.ItemText, 'itemText')

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, RadioGroup.LabelProps>
>(RadioGroup.Label, 'label')

export {
	RadioGroupContext as Context,
	type RadioGroupContextProps as ContextProps,
	RadioGroupItemHiddenInput as ItemHiddenInput,
	type RadioGroupItemHiddenInputProps as ItemHiddenInputProps,
} from '@ark-ui/react/radio-group'
