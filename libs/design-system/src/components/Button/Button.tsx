import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@mando/styled-system/jsx'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { forwardRef } from 'react'
import { type VariantsProps, style } from './style'

import { Icon } from '../'
import { ariaAttr } from '../../utils'

const ButtonWrapper = styled(ark.button, style)

export interface ButtonProps
	extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
		VariantsProps {
	isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, isLoading, asChild, ...props }, ref) => {
		return (
			<ButtonWrapper
				ref={ref}
				type={asChild ? undefined : 'button'}
				aria-busy={ariaAttr(isLoading)}
				asChild={asChild}
				{...props}
			>
				{isLoading ? (
					<>
						<Icon
							key='loading-icon'
							className='__loadingIcon'
							icon={'svg-spinners:ring-resize'}
							pos={'absolute'}
							top={'50%'}
							left={'50%'}
							transform={'translate(-50%, -50%)'}
						/>
						<styled.span
							display={'flex'}
							gap={2}
							opacity={0}
							visibility={'hidden'}
						>
							{children}
						</styled.span>
					</>
				) : (
					children
				)}
			</ButtonWrapper>
		)
	},
)
