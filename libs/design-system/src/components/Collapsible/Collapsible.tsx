'use client'

import type { Assign } from '@ark-ui/react'
import { Collapsible } from '@ark-ui/react/collapsible'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Collapsible.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	Collapsible.Root,
	'root',
)

export const Content = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Collapsible.ContentProps>
>(Collapsible.Content, 'content')

export const Trigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, Collapsible.TriggerProps>
>(Collapsible.Trigger, 'trigger')

export {
	CollapsibleContext as Context,
	type CollapsibleContextProps as ContextProps,
} from '@ark-ui/react/collapsible'
