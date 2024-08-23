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

export const Circle = withContext<
	JSX.Element,
	Assign<JsxStyleProps, Progress.CircleProps>
>(Progress.Circle, 'circle')

export const CircleTrack = withContext<
	JSX.Element,
	Assign<JsxStyleProps, Progress.CircleTrackProps>
>(Progress.CircleTrack, 'circleTrack')

export const CircleRange = withContext<
	JSX.Element,
	Assign<JsxStyleProps, Progress.CircleRangeProps>
>(Progress.CircleRange, 'circleRange')

export const ValueText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Progress.ValueTextProps>
>(Progress.ValueText, 'valueText')

export {
	ProgressContext as Context,
	type ProgressContextProps as ContextProps,
} from '@ark-ui/react/progress'
