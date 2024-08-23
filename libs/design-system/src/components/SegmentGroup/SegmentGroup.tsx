'use client'

import type { Assign } from '@ark-ui/react'
import { SegmentGroup } from '@ark-ui/react/segment-group'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, SegmentGroup.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	SegmentGroup.Root,
	'root',
)

export const Indicator = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, SegmentGroup.IndicatorProps>
>(SegmentGroup.Indicator, 'indicator')

export const ItemControl = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, SegmentGroup.ItemControlProps>
>(SegmentGroup.ItemControl, 'itemControl')

export const Item = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, SegmentGroup.ItemProps>
>(SegmentGroup.Item, 'item')

export const ItemText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, SegmentGroup.ItemTextProps>
>(SegmentGroup.ItemText, 'itemText')

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, SegmentGroup.LabelProps>
>(SegmentGroup.Label, 'label')

export {
	SegmentGroupContext as Context,
	type SegmentGroupContextProps as ContextProps,
	SegmentGroupItemHiddenInput as ItemHiddenInput,
} from '@ark-ui/react/segment-group'
