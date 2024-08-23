import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { forwardRef } from 'react'
import { type VariantsProps, style } from './style'

import { Icon } from '../'

const ButtonWrapper = styled(ark.button, style)

export interface CloseButtonProps
	extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
		VariantsProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
	({ children, asChild, ...props }, ref) => {
		return (
			<ButtonWrapper ref={ref} type={asChild ? undefined : 'button'} {...props}>
				<Icon icon={'material-symbols:close-rounded'} />
			</ButtonWrapper>
		)
	},
)
