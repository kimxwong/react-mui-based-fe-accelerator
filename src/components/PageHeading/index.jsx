import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, useMediaQuery } from '@mui/material'

const PageHeading = ({ titleText, descriptionText, ...props }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'))

	return (
		<Box maxWidth={944} {...props}>
			<Typography
				color="primary.main"
				variant={isDesktop ? 'titleXLarge' : 'titleLarge'}
				component="h1"
			>
				{titleText}
			</Typography>
			<Typography color="primary.main" variant="bodyMedium" component="p">
				{descriptionText}
			</Typography>
		</Box>
	)
}

PageHeading.propTypes = {
	titleText: PropTypes.string.isRequired,
	descriptionText: PropTypes.string,
}

PageHeading.defaultProps = {
	descriptionText: '',
}

export default PageHeading
