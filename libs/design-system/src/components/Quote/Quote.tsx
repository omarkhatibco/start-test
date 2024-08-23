import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { type VariantsProps, style } from './style'

export interface QuoteProps
	extends Assign<JsxStyleProps, HTMLArkProps<'q'>>,
		VariantsProps {}
export const Quote = styled(ark.q, style)
