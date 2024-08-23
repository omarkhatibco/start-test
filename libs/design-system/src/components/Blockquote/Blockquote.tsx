import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { type VariantsProps, style } from './style'

export interface BlockquoteProps
	extends Assign<JsxStyleProps, HTMLArkProps<'blockquote'>>,
		VariantsProps {}
export const Blockquote = styled(ark.blockquote, style)
