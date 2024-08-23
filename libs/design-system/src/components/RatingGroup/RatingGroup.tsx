'use client'

import type { Assign } from '@ark-ui/react'
import { RatingGroup } from '@ark-ui/react/rating-group'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, RatingGroup.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	RatingGroup.Root,
	'root',
)

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, RatingGroup.LabelProps>
>(RatingGroup.Label, 'label')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, RatingGroup.ControlProps>
>(RatingGroup.Control, 'control')

export const Item = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, RatingGroup.ItemProps>
>(RatingGroup.Item, 'item')

export {
	RatingGroupContext as Context,
	type RatingGroupContextProps as ContextProps,
	RatingGroupItemContext as ItemContext,
	RatingGroupHiddenInput as HiddenInput,
} from '@ark-ui/react/rating-group'
