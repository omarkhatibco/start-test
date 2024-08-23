'use client'

import type { Assign } from '@ark-ui/react'
import { Slider } from '@ark-ui/react/slider'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Slider.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Slider.Root, 'root')

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, Slider.LabelProps>
>(Slider.Label, 'label')

export const ValueText = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.ValueTextProps>
>(Slider.ValueText, 'valueText')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.ControlProps>
>(Slider.Control, 'control')

export const Track = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.TrackProps>
>(Slider.Track, 'track')

export const Range = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.RangeProps>
>(Slider.Range, 'range')

export const Thumb = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.ThumbProps>
>(Slider.Thumb, 'thumb')

export const MarkerGroup = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Slider.MarkerGroupProps>
>(Slider.MarkerGroup, 'markerGroup')

export const Marker = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Slider.MarkerProps>
>(Slider.Marker, 'marker')

export {
	SliderContext as Context,
	type SliderContextProps as ContextProps,
	SliderHiddenInput as HiddenInput,
	type SliderHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/slider'
