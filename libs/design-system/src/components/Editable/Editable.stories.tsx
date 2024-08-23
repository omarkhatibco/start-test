import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../'
import * as Editable from './Editable'

const meta: Meta<typeof Editable.Root> = {
	component: Editable.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Editable.Root
				placeholder='Your favorite Framework'
				defaultValue='Double click to edit'
				activationMode='dblclick'
			>
				<Editable.Label>Framework</Editable.Label>
				<Editable.Area>
					<Editable.Input />
					<Editable.Preview />
				</Editable.Area>
				<Editable.Context>
					{(editable) => (
						<Editable.Control>
							{editable.editing ? (
								<>
									<Editable.SubmitTrigger asChild>
										<Button variant='link'>Save</Button>
									</Editable.SubmitTrigger>
									<Editable.CancelTrigger asChild>
										<Button variant='link'>Cancel</Button>
									</Editable.CancelTrigger>
								</>
							) : (
								<Editable.EditTrigger asChild>
									<Button variant='link'>Edit</Button>
								</Editable.EditTrigger>
							)}
						</Editable.Control>
					)}
				</Editable.Context>
			</Editable.Root>
		)
	},
}
