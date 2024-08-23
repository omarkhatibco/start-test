'use client'

import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { NumberInput } from '@ark-ui/react/number-input'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, NumberInput.RootProps>,
		VariantsProps {}

export const Root = withProvider<HTMLDivElement, RootProps>(
	NumberInput.Root,
	'root',
)

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, NumberInput.LabelProps>
>(NumberInput.Label, 'label')

export const Input = withContext<
	HTMLInputElement,
	Assign<JsxStyleProps, NumberInput.InputProps>
>(NumberInput.Input, 'input')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, NumberInput.ControlProps>
>(NumberInput.Control, 'control')

export const DecrementTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, NumberInput.DecrementTriggerProps>
>(NumberInput.DecrementTrigger, 'decrementTrigger')

export const IncrementTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, NumberInput.IncrementTriggerProps>
>(NumberInput.IncrementTrigger, 'incrementTrigger')

export {
	NumberInputContext as Context,
	type NumberInputContextProps as ContextProps,
} from '@ark-ui/react/number-input'
