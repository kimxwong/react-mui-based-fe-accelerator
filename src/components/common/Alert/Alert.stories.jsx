import Alert from '.'

export default {
	title: 'Alert',
	component: Alert,
	args: {
		title: 'Test Sample Title',
		message: 'Test sample message',
	},
}

const Template = ({ ...args }) => <Alert {...args} />

export const InfoTemplate = Template.bind({})

InfoTemplate.args = {
	type: 'info',
}

export const ErrorTemplate = Template.bind({})

ErrorTemplate.args = {
	type: 'error',
}

export const SuccessTemplate = Template.bind({})

SuccessTemplate.args = {
	type: 'success',
}
