'use client'

import type { Assign } from '@ark-ui/react'
import { ToggleGroup } from '@ark-ui/react/toggle-group'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, ToggleGroup.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	ToggleGroup.Root,
	'root',
)

export const Item = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, ToggleGroup.ItemProps>
>(ToggleGroup.Item, 'item')

export {
	ToggleGroupContext as Context,
	type ToggleGroupContextProps as ContextProps,
} from '@ark-ui/react/toggle-group'
