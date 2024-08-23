import { forwardRef } from 'react'

import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { type VariantsProps, style } from './style'

export interface ImageProps
	extends Assign<JsxStyleProps, HTMLArkProps<'img'>>,
		VariantsProps {}

export const ImageRoot = styled(ark.img, style)

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
	return <ImageRoot ref={ref} loading='lazy' {...props} />
})
