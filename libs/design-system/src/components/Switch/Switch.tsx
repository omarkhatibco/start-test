'use client'

import type { Assign } from '@ark-ui/react'
import { Switch } from '@ark-ui/react/switch'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Switch.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Switch.Root, 'root')

export const Label = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Switch.LabelProps>
>(Switch.Label, 'label')

export const Control = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Switch.ControlProps>
>(Switch.Control, 'control')

export const Thumb = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Switch.ThumbProps>
>(Switch.Thumb, 'thumb')

export {
	SwitchContext as Context,
	type SwitchContextProps as ContextProps,
	SwitchHiddenInput as HiddenInput,
	type SwitchHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/switch'
