'use client'

import type { Assign } from '@ark-ui/react'
import { PinInput } from '@ark-ui/react/pin-input'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, PinInput.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	PinInput.Root,
	'root',
)

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, PinInput.LabelProps>
>(PinInput.Label, 'label')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, PinInput.ControlProps>
>(PinInput.Control, 'control')

export const Input = withContext<
	HTMLInputElement,
	Assign<JsxStyleProps, PinInput.InputProps>
>(PinInput.Input, 'input')

export {
	PinInputContext as Context,
	type PinInputContextProps as ContextProps,
	PinInputHiddenInput as HiddenInput,
	type PinInputHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/pin-input'
