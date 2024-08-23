import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { type VariantsProps, style } from './style'

export interface ScrollableProps
	extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
		VariantsProps {}

export const Scrollable = styled(ark.div, style)
