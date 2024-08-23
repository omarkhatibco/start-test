'use client'

import { type Assign, Avatar } from '@ark-ui/react'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Avatar.RootProps>,
		VariantsProps {}

export const Root = withProvider<HTMLDivElement, RootProps>(Avatar.Root, 'root')

export const Image = withContext<
	HTMLImageElement,
	Assign<JsxStyleProps, Avatar.ImageProps>
>(Avatar.Image, 'image')

export const Fallback = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, Avatar.FallbackProps>
>(Avatar.Fallback, 'fallback')

export {
	AvatarContext as Context,
	type AvatarContextProps as ContextProps,
} from '@ark-ui/react/avatar'
