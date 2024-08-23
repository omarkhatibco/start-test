'use client'

import type { Assign } from '@ark-ui/react'
import { Splitter } from '@ark-ui/react/splitter'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Splitter.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	Splitter.Root,
	'root',
)

export const Panel = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Splitter.PanelProps>
>(Splitter.Panel, 'panel')

export const ResizeTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, Splitter.ResizeTriggerProps>
>(Splitter.ResizeTrigger, 'resizeTrigger')

export {
	SplitterContext as Context,
	type SplitterContextProps as ContextProps,
} from '@ark-ui/react/splitter'
