import Button from './Button'

export default {
	title: 'Button',
	component: Button,
	args: {
		children: 'Test Sample Text',
	},
}

const Template = ({ ...args }) => <Button {...args} />

export const DefaultTemplate = Template.bind({})
