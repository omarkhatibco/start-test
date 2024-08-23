import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof styled.p> = {
	component: styled.p,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => <styled.p>Mando AI</styled.p>,
}

export const WithSmallSpan: Story = {
	render: () => <styled.span>Mando AI</styled.span>,
}

export const WithNoOfLine: Story = {
	render: () => (
		<styled.p lineClamp={'1'}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
			posuere enim. In hendrerit arcu eu leo molestie faucibus. Aliquam erat
			volutpat. Curabitur dignissim at justo ac vehicula. Vivamus mollis, nunc
			nec commodo volutpat, tortor mi mattis ipsum, id consequat neque est eget
			augue. Sed facilisis volutpat magna ac dictum. Sed quis pretium orci. Cras
			vestibulum vitae dolor in tempus. Sed nec laoreet ante. Pellentesque
			aliquet quis libero a posuere. Pellentesque convallis metus nec enim
			aliquam, in sagittis velit pretium. Nam dignissim placerat metus, nec
			dictum mi convallis vel. Sed vehicula dolor velit, eu dignissim massa
			rutrum at. Suspendisse maximus est sit amet arcu pharetra, at egestas
			tortor lacinia. Etiam sagittis, leo a vestibulum egestas, arcu turpis
			volutpat nibh, sit amet feugiat dolor neque vel ipsum. Cras in libero
			nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
			posuere enim. In hendrerit arcu eu leo molestie faucibus. Aliquam erat
			volutpat. Curabitur dignissim at justo ac vehicula. Vivamus mollis, nunc
			nec commodo volutpat, tortor mi mattis ipsum, id consequat neque est eget
			augue. Sed facilisis volutpat magna ac dictum. Sed quis pretium orci. Cras
			vestibulum vitae dolor in tempus. Sed nec laoreet ante. Pellentesque
			aliquet quis libero a posuere. Pellentesque convallis metus nec enim
			aliquam, in sagittis velit pretium. Nam dignissim placerat metus, nec
			dictum mi convallis vel. Sed vehicula dolor velit, eu dignissim massa
			rutrum at. Suspendisse maximus est sit amet arcu pharetra, at egestas
			tortor lacinia. Etiam sagittis, leo a vestibulum egestas, arcu turpis
			volutpat nibh, sit amet feugiat dolor neque vel ipsum. Cras in libero
			nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
			posuere enim. In hendrerit arcu eu leo molestie faucibus. Aliquam erat
			volutpat. Curabitur dignissim at justo ac vehicula. Vivamus mollis, nunc
			nec commodo volutpat, tortor mi mattis ipsum, id consequat neque est eget
			augue. Sed facilisis volutpat magna ac dictum. Sed quis pretium orci. Cras
			vestibulum vitae dolor in tempus. Sed nec laoreet ante. Pellentesque
			aliquet quis libero a posuere. Pellentesque convallis metus nec enim
			aliquam, in sagittis velit pretium. Nam dignissim placerat metus, nec
			dictum mi convallis vel. Sed vehicula dolor velit, eu dignissim massa
			rutrum at. Suspendisse maximus est sit amet arcu pharetra, at egestas
			tortor lacinia. Etiam sagittis, leo a vestibulum egestas, arcu turpis
			volutpat nibh, sit amet feugiat dolor neque vel ipsum. Cras in libero
			nibh.
		</styled.p>
	),
}

export const WithAllElementType: Story = {
	render: () => (
		<>
			<styled.b>Bold</styled.b>
			<br />
			<styled.i>Italic</styled.i>
			<br />
			<styled.u>Underline</styled.u>
			<br />
			<styled.abbr>I18N</styled.abbr>
			<br />
			<styled.cite>Citation</styled.cite>
			<br />
			<styled.del>Deleted</styled.del>
			<br />
			<styled.em>Emphasis</styled.em>
			<br />
			<styled.ins>Inserted</styled.ins>
			<br />
			<styled.kbd>Ctrl + C</styled.kbd>
			<br />
			<styled.mark>Highlighted</styled.mark>
			<br />
			<styled.s>Strikethrough</styled.s>
			<br />
			<styled.samp>Sample</styled.samp>
			<br />
			<styled.time>time</styled.time>
			<br />
			<styled.sub>sub</styled.sub>
			<br />
			<styled.sup>sup</styled.sup>
		</>
	),
}
