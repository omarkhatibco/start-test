import { Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as QrCode from './QRCode'

const meta: Meta<typeof QrCode.Root> = {
	component: QrCode.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Flex w='400px' h='400px'>
				<QrCode.Root value='http://khatib.dev' encoding={{ ecc: 'H' }}>
					<QrCode.Frame>
						<QrCode.Pattern />
					</QrCode.Frame>
					<QrCode.Overlay>
						<Icon
							icon='material-symbols:info-rounded'
							fontSize={48}
							color='fg.success.primary'
						/>
					</QrCode.Overlay>
				</QrCode.Root>
			</Flex>
		)
	},
}
