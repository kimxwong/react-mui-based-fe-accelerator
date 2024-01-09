import PageHeading from '.'

export default {
	title: 'PageHeading',
	component: PageHeading,
	args: {
		titleText: 'Test Sample Title',
	},
}

const Template = ({ ...args }) => <PageHeading {...args} />

export const DefaultTemplate = Template.bind({})

DefaultTemplate.args = {
	descriptionText: 'Test Sample Description',
}
