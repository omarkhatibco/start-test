import { VStack, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Scrollable } from './Scrollable'

const meta: Meta<typeof Scrollable> = {
	component: Scrollable,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Scrollable maxW='50vw' maxH={'50vh'} overflowY={'auto'} {...props}>
				<VStack>
					{Array.from({ length: 20 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: No need to use index
						<styled.p key={i}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							at posuere enim. In hendrerit arcu eu leo molestie faucibus.
							Aliquam erat volutpat. Curabitur dignissim at justo ac vehicula.
							Vivamus mollis, nunc nec commodo volutpat, tortor mi mattis ipsum,
							id consequat neque est eget augue. Sed facilisis volutpat magna ac
							dictum. Sed quis pretium orci. Cras vestibulum vitae dolor in
							tempus. Sed nec laoreet ante. Pellentesque aliquet quis libero a
							posuere. Pellentesque convallis metus nec enim aliquam, in
							sagittis velit pretium. Nam dignissim placerat metus, nec dictum
							mi convallis vel. Sed vehicula dolor velit, eu dignissim massa
							rutrum at. Suspendisse maximus est sit amet arcu pharetra, at
							egestas tortor lacinia. Etiam sagittis, leo a vestibulum egestas,
							arcu turpis volutpat nibh, sit amet feugiat dolor neque vel ipsum.
							Cras in libero nibh. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Maecenas at posuere enim. In hendrerit arcu eu
							leo molestie faucibus. Aliquam erat volutpat. Curabitur dignissim
							at justo ac vehicula. Vivamus mollis, nunc nec commodo volutpat,
							tortor mi mattis ipsum, id consequat neque est eget augue. Sed
							facilisis volutpat magna ac dictum. Sed quis pretium orci. Cras
							vestibulum vitae dolor in tempus. Sed nec laoreet ante.
							Pellentesque aliquet quis libero a posuere. Pellentesque convallis
							metus nec enim aliquam, in sagittis velit pretium. Nam dignissim
							placerat metus, nec dictum mi convallis vel. Sed vehicula dolor
							velit, eu dignissim massa rutrum at. Suspendisse maximus est sit
							amet arcu pharetra, at egestas tortor lacinia. Etiam sagittis, leo
							a vestibulum egestas, arcu turpis volutpat nibh, sit amet feugiat
							dolor neque vel ipsum. Cras in libero nibh. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Maecenas at posuere enim. In
							hendrerit arcu eu leo molestie faucibus. Aliquam erat volutpat.
							Curabitur dignissim at justo ac vehicula. Vivamus mollis, nunc nec
							commodo volutpat, tortor mi mattis ipsum, id consequat neque est
							eget augue. Sed facilisis volutpat magna ac dictum. Sed quis
							pretium orci. Cras vestibulum vitae dolor in tempus. Sed nec
							laoreet ante. Pellentesque aliquet quis libero a posuere.
							Pellentesque convallis metus nec enim aliquam, in sagittis velit
							pretium. Nam dignissim placerat metus, nec dictum mi convallis
							vel. Sed vehicula dolor velit, eu dignissim massa rutrum at.
							Suspendisse maximus est sit amet arcu pharetra, at egestas tortor
							lacinia. Etiam sagittis, leo a vestibulum egestas, arcu turpis
							volutpat nibh, sit amet feugiat dolor neque vel ipsum. Cras in
							libero nibh.
						</styled.p>
					))}
				</VStack>
			</Scrollable>
		)
	},
}
