import { Center, Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as ColorPicker from './ColorPicker'

const meta: Meta<typeof ColorPicker.Root> = {
	component: ColorPicker.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<ColorPicker.Root defaultValue='#eb5e41'>
				<ColorPicker.Label>Color</ColorPicker.Label>
				<ColorPicker.Control>
					<ColorPicker.ChannelInput channel='hex' />
					{/* <ColorPicker.ChannelInput channel='alpha' /> */}
					{/* <ColorPicker.ValueText /> */}
					<ColorPicker.Trigger>
						<ColorPicker.ValueSwatch />
					</ColorPicker.Trigger>
				</ColorPicker.Control>

				<ColorPicker.Positioner>
					<ColorPicker.Content>
						<ColorPicker.FormatTrigger>
							Toggle ColorFormat
						</ColorPicker.FormatTrigger>
						<ColorPicker.FormatSelect />
						<ColorPicker.Area>
							<ColorPicker.AreaBackground />
							<ColorPicker.AreaThumb />
						</ColorPicker.Area>
						<Flex gap={2}>
							<Center>
								<ColorPicker.EyeDropperTrigger>
									<Icon icon='material-symbols:colorize-outline-rounded' />
								</ColorPicker.EyeDropperTrigger>
							</Center>
							<VStack gap={2} w='full'>
								<ColorPicker.ChannelSlider channel='hue'>
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
								<ColorPicker.ChannelSlider channel='alpha'>
									<ColorPicker.TransparencyGrid />
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
							</VStack>
						</Flex>
						<ColorPicker.View format='rgba'>
							<ColorPicker.ChannelInput channel='hex' />
							<ColorPicker.ChannelInput channel='alpha' />
						</ColorPicker.View>
						<ColorPicker.View format='hsla'>
							<ColorPicker.ChannelInput channel='hue' />
							<ColorPicker.ChannelInput channel='saturation' />
							<ColorPicker.ChannelInput channel='lightness' />
						</ColorPicker.View>

						<ColorPicker.SwatchGroup>
							<ColorPicker.SwatchTrigger value='red'>
								<ColorPicker.Swatch value='red'>
									<ColorPicker.SwatchIndicator>
										<Icon icon='material-symbols:check-rounded' />
									</ColorPicker.SwatchIndicator>
								</ColorPicker.Swatch>
							</ColorPicker.SwatchTrigger>
							<ColorPicker.SwatchTrigger value='blue'>
								<ColorPicker.Swatch value='blue'>
									<ColorPicker.SwatchIndicator>
										<Icon icon='material-symbols:check-rounded' />
									</ColorPicker.SwatchIndicator>
								</ColorPicker.Swatch>
							</ColorPicker.SwatchTrigger>
							<ColorPicker.SwatchTrigger value='green'>
								<ColorPicker.Swatch value='green'>
									<ColorPicker.SwatchIndicator>
										<Icon icon='material-symbols:check-rounded' />
									</ColorPicker.SwatchIndicator>
								</ColorPicker.Swatch>
							</ColorPicker.SwatchTrigger>
						</ColorPicker.SwatchGroup>
					</ColorPicker.Content>
				</ColorPicker.Positioner>
				<ColorPicker.HiddenInput />
			</ColorPicker.Root>
		)
	},
}

export const Simplified: Story = {
	render: () => {
		return (
			<ColorPicker.Root defaultValue='#eb5e41'>
				<ColorPicker.Label>Color</ColorPicker.Label>
				<ColorPicker.Control>
					<ColorPicker.ChannelInput channel='hex' />
					<ColorPicker.Trigger>
						<ColorPicker.ValueSwatch />
					</ColorPicker.Trigger>
				</ColorPicker.Control>

				<ColorPicker.Positioner>
					<ColorPicker.Content>
						<ColorPicker.Area>
							<ColorPicker.AreaBackground />
							<ColorPicker.AreaThumb />
						</ColorPicker.Area>
						<Flex gap={2}>
							<Center>
								<ColorPicker.EyeDropperTrigger>
									<Icon icon='material-symbols:colorize-outline-rounded' />
								</ColorPicker.EyeDropperTrigger>
							</Center>
							<VStack gap={2} w='full'>
								<ColorPicker.ChannelSlider channel='hue'>
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
								<ColorPicker.ChannelSlider channel='alpha'>
									<ColorPicker.TransparencyGrid />
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
							</VStack>
						</Flex>
					</ColorPicker.Content>
				</ColorPicker.Positioner>
				<ColorPicker.HiddenInput />
			</ColorPicker.Root>
		)
	},
}
export const withDisabled: Story = {
	render: () => {
		return (
			<ColorPicker.Root defaultValue='#eb5e41' disabled>
				<ColorPicker.Label>Color</ColorPicker.Label>
				<ColorPicker.Control>
					<ColorPicker.ChannelInput channel='hex' />
					<ColorPicker.Trigger>
						<ColorPicker.ValueSwatch />
					</ColorPicker.Trigger>
				</ColorPicker.Control>

				<ColorPicker.Positioner>
					<ColorPicker.Content>
						<ColorPicker.Area>
							<ColorPicker.AreaBackground />
							<ColorPicker.AreaThumb />
						</ColorPicker.Area>
						<Flex gap={2}>
							<Center>
								<ColorPicker.EyeDropperTrigger>
									<Icon icon='material-symbols:colorize-outline-rounded' />
								</ColorPicker.EyeDropperTrigger>
							</Center>
							<VStack gap={2} w='full'>
								<ColorPicker.ChannelSlider channel='hue'>
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
								<ColorPicker.ChannelSlider channel='alpha'>
									<ColorPicker.TransparencyGrid />
									<ColorPicker.ChannelSliderTrack />
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSlider>
							</VStack>
						</Flex>
					</ColorPicker.Content>
				</ColorPicker.Positioner>
				<ColorPicker.HiddenInput />
			</ColorPicker.Root>
		)
	},
}
