'use client'

import type { Assign } from '@ark-ui/react'
import { Progress } from '@ark-ui/react/progress'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Progress.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	Progress.Root,
	'root',
)

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, Progress.LabelProps>
>(Progress.Label, 'label')

export const Track = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Progress.TrackProps>
>(Progress.Track, 'track')

export const Range = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Progress.RangeProps>
>(Progress.Range, 'range')

export const ValueText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Progress.ValueTextProps>
>(Progress.ValueText, 'valueText')

export {
	ProgressContext as Context,
	type ProgressContextProps as ContextProps,
} from '@ark-ui/react/progress'
