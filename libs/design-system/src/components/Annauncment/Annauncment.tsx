'use client'

import type { Assign, Avatar } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Avatar.RootProps>,
		VariantsProps {}

export const Root = withProvider<HTMLDivElement, RootProps>(ark.a, 'root')

export const Type = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, HTMLArkProps<'span'>>
>(ark.span, 'type')
