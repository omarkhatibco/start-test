'use client'

import type { Assign } from '@ark-ui/react'
import { HoverCard } from '@ark-ui/react/hover-card'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withRootProvider, withContext } = createStyleContext(style)

export interface RootProps extends HoverCard.RootProps, VariantsProps {}
export const Root = withRootProvider<RootProps>(HoverCard.Root)

export const Arrow = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HoverCard.ArrowProps>
>(HoverCard.Arrow, 'arrow')

export const ArrowTip = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HoverCard.ArrowTipProps>
>(HoverCard.ArrowTip, 'arrowTip')

export const Content = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HoverCard.ContentProps>
>(HoverCard.Content, 'content')

export const Positioner = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, HoverCard.PositionerProps>
>(HoverCard.Positioner, 'positioner')

export const Trigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, HoverCard.TriggerProps>
>(HoverCard.Trigger, 'trigger')

export {
	HoverCardContext as Context,
	type HoverCardContextProps as ContextProps,
} from '@ark-ui/react/hover-card'
