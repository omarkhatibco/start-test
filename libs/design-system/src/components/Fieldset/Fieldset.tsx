'use client'

import type { Assign } from '@ark-ui/react'
import { Fieldset } from '@ark-ui/react/fieldset'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Fieldset.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	Fieldset.Root,
	'root',
)

export const Legend = withContext<
	HTMLLegendElement,
	Assign<JsxStyleProps, Fieldset.LegendProps>
>(Fieldset.Legend, 'legend')

export const HelperText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Fieldset.HelperTextProps>
>(Fieldset.HelperText, 'helperText')

export const ErrorText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Fieldset.ErrorTextProps>
>(Fieldset.ErrorText, 'errorText')

export { FieldsetContext as Context } from '@ark-ui/react/fieldset'
