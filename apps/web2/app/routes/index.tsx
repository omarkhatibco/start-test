import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

import { Button, Image } from '@mando/design-system'
import { Box } from '@mando/styled-system/jsx'

const filePath = 'count.txt'

async function readCount() {
	return 15
}

const getCount = createServerFn('GET', () => {
	return readCount()
})

const updateCount = createServerFn('POST', async (addBy: number) => {
	// const count = await readCount()
})

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await getCount(),
})

function Home() {
	const router = useRouter()
	const state = Route.useLoaderData()

	return (
		<Box p={8}>
			<Image
				src='https://picsum.photos/600/400'
				alt='My random image'
				aspectRatio={16 / 9}
				w={'full'}
			/>
			<Box>
				<h1>Hello World!</h1>
				<p>You have clicked {state} times.</p>
			</Box>
			<Button>Omaar</Button>
		</Box>
		// <Button
		// 	onClick={() => {
		// 		updateCount(1).then(() => {
		// 			router.invalidate()
		// 		})
		// 	}}
		// >
		// 	Add 1 to {state}?
		// </Button>
	)
}
