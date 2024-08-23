import { Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, FeaturedIcon, Icon } from '../'
import * as FileUpload from './FileUpload'

const meta: Meta<typeof FileUpload.Root> = {
	component: FileUpload.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Flex w='800px'>
				<FileUpload.Root maxFiles={3} accept={'image/*'}>
					<FileUpload.Label>Uplaod your files</FileUpload.Label>
					<FileUpload.Dropzone>
						<FeaturedIcon palette={'success'}>
							<Icon icon='majesticons:cloud-upload' />
						</FeaturedIcon>
						<FileUpload.Label>Drop your files here</FileUpload.Label>
						<FileUpload.Trigger asChild>
							<Button size='sm' colorPalette={'primary'}>
								click here
							</Button>
						</FileUpload.Trigger>
						<FileUpload.Label>
							SVG, PNG, JPG or GIF (max. 800x400px)
						</FileUpload.Label>
					</FileUpload.Dropzone>
					<FileUpload.ItemGroup>
						<FileUpload.Context>
							{({ acceptedFiles }) =>
								acceptedFiles.map((file, id) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<FileUpload.Item key={id} file={file}>
										<FileUpload.ItemPreview type='image/*'>
											<FileUpload.ItemPreviewImage />
										</FileUpload.ItemPreview>
										<FileUpload.ItemName />
										<FileUpload.ItemSizeText />
										<FileUpload.ItemDeleteTrigger>
											<Icon icon='material-symbols:delete-outline-rounded' />
										</FileUpload.ItemDeleteTrigger>
									</FileUpload.Item>
								))
							}
						</FileUpload.Context>
					</FileUpload.ItemGroup>
					<FileUpload.HiddenInput />
				</FileUpload.Root>
			</Flex>
		)
	},
}

export const WithDisabled: Story = {
	render: () => {
		return (
			<Flex w='800px'>
				<FileUpload.Root maxFiles={3} disabled>
					<FileUpload.Label>Uplaod your files</FileUpload.Label>
					<FileUpload.Dropzone>
						<FeaturedIcon palette={'success'}>
							<Icon icon='majesticons:cloud-upload' />
						</FeaturedIcon>
						<FileUpload.Label>Drop your files here</FileUpload.Label>
						<FileUpload.Trigger asChild>
							<Button size='sm' variant='primary'>
								or click here
							</Button>
						</FileUpload.Trigger>
						<FileUpload.Label>
							SVG, PNG, JPG or GIF (max. 800x400px)
						</FileUpload.Label>
					</FileUpload.Dropzone>
					<FileUpload.ItemGroup>
						<FileUpload.Context>
							{({ acceptedFiles }) =>
								acceptedFiles.map((file, id) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<FileUpload.Item key={id} file={file}>
										<FileUpload.ItemPreview type='image/*'>
											<FileUpload.ItemPreviewImage />
										</FileUpload.ItemPreview>
										<FileUpload.ItemName />
										<FileUpload.ItemSizeText />
										<FileUpload.ItemDeleteTrigger asChild>
											<Button iconOnly>
												<Icon icon='material-symbols:delete-outline-rounded' />
											</Button>
										</FileUpload.ItemDeleteTrigger>
									</FileUpload.Item>
								))
							}
						</FileUpload.Context>
					</FileUpload.ItemGroup>
					<FileUpload.HiddenInput />
				</FileUpload.Root>
			</Flex>
		)
	},
}
