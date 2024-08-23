import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as TagsInput from './TagsInput'

const meta: Meta<typeof TagsInput.Root> = {
	component: TagsInput.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW='xs'>
				<TagsInput.Context>
					{(api) => (
						<>
							<TagsInput.Label>Frameworks</TagsInput.Label>
							<TagsInput.Control>
								{api.value.map((value, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<TagsInput.Item key={index} index={index} value={value}>
										<TagsInput.ItemPreview>
											<TagsInput.ItemText>{value}</TagsInput.ItemText>
											<TagsInput.ItemDeleteTrigger>
												<Icon icon={'material-symbols:close-small'} />
											</TagsInput.ItemDeleteTrigger>
										</TagsInput.ItemPreview>
										<TagsInput.ItemInput />
									</TagsInput.Item>
								))}
								<TagsInput.Input placeholder='Add Framework' />
							</TagsInput.Control>
							<TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
						</>
					)}
				</TagsInput.Context>
			</TagsInput.Root>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<TagsInput.Root
				defaultValue={['React', 'Solid', 'Vue']}
				maxW='xs'
				invalid
			>
				<TagsInput.Context>
					{(api) => (
						<>
							<TagsInput.Label>Frameworks</TagsInput.Label>
							<TagsInput.Control>
								{api.value.map((value, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<TagsInput.Item key={index} index={index} value={value}>
										<TagsInput.ItemPreview>
											<TagsInput.ItemText>{value}</TagsInput.ItemText>
											<TagsInput.ItemDeleteTrigger>
												<Icon icon={'material-symbols:close-small'} />
											</TagsInput.ItemDeleteTrigger>
										</TagsInput.ItemPreview>
										<TagsInput.ItemInput />
									</TagsInput.Item>
								))}
								<TagsInput.Input placeholder='Add Framework' />
							</TagsInput.Control>
							<TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
						</>
					)}
				</TagsInput.Context>
			</TagsInput.Root>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<TagsInput.Root
				defaultValue={['React', 'Solid', 'Vue']}
				maxW='xs'
				disabled
			>
				<TagsInput.Context>
					{(api) => (
						<>
							<TagsInput.Label>Frameworks</TagsInput.Label>
							<TagsInput.Control>
								{api.value.map((value, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<TagsInput.Item key={index} index={index} value={value}>
										<TagsInput.ItemPreview>
											<TagsInput.ItemText>{value}</TagsInput.ItemText>
											<TagsInput.ItemDeleteTrigger>
												<Icon icon={'material-symbols:close-small'} />
											</TagsInput.ItemDeleteTrigger>
										</TagsInput.ItemPreview>
										<TagsInput.ItemInput />
									</TagsInput.Item>
								))}
								<TagsInput.Input placeholder='Add Framework' />
							</TagsInput.Control>
							<TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
						</>
					)}
				</TagsInput.Context>
			</TagsInput.Root>
		)
	},
}
