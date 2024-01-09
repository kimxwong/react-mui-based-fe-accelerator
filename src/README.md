# Guide to styling/customizing Material UI

Notes: There is no absolute correct way to select what to use to style. But when you have a design, the recommendation is start from creating a global theme, then use individual stylings for additonal cases. If it is not satisfied(scenarios such as the theme customization is not enough, there are very heavy styling, or you dont like the syntax etc), you can create a entire new commponent in `common` folder. 

## Using Theme 

### Setup

- A theme is a set of predefined styles and configurations that can be applied to your React components. 
- It allows you to customize the visual appearance of your app in a consistent manner.

#### When to Use:
- Consistent Styling
  - Themes enable you to maintain a consistent look and feel across your entire application. You can define common styles, such as colors, typography, spacing, etc., in a single place and apply them globally.
- Easy Customization
  - With themes, you can easily customize the default MUI styles to match your project's branding or design requirements. For example, you can change the primary and secondary colors to reflect your brand colors.
- Easier accessibility
  - MUI themes come with built-in accessibility features. By using the theme, you ensure that your app meets accessibility guidelines, such as contrast ratios, font sizes, etc., without manually handling each component.

#### Example:

```Javascript
/* Create a customized theme */
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  {/* Your configs (see futher helpful configs below ) */}
})

/* In your App.jsx file */
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Your app components */}
      </ThemeProvider>
    );
  }
```

### Set Style Overrides

- Customize the appearance of specific components consistently across the application.

#### Example:

```Javascript
const theme = createTheme({
  components: {
    MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)',
				},
			},
		},
  },
})
```

### Set Default Props

- Define default values for component props to ensure consistent application.

#### Example:

```Javascript
const theme = createTheme({
  components: {
    MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
  },
})
```

### Set Color Palette

- Define and modify the colors used across the application for a consistent look and feel.

#### Example:

```Javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Customize primary color
    },
    secondary: {
      main: '#00FF00', // Customize secondary color
    },
  },
})
```

the color name can also be used in HTML and JS

```HTML
<Typography
  color="primary.main"
>
```

```Javascript
const StyledLink = styled(Link)(({ theme }) => {
  return {
		color: theme.palette.primary.main,
  }
)
```

## Individual Styling

### 1. Component Props

- Take advantage of the component props from the MUI library API to change and style your MUI components.
- Give specific props to a component to change its look and how it works.

#### When to Use:

- Quickly change MUI components by playing with provided props.
- No need for extra CSS or style writing.
- Directly embedded in HTML.

#### Example:

```HTML
<Button variant="outlined" disableRipple>Outlined</Button>
```

### 2. Sx props

- Take advantage of the SX prop from the MUI library API to tweak and style your MUI components.
- Give specific values to the SX prop to change its look and how it works.

#### When to Use:

- Quickly change MUI components by playing with comprehensive styles, including
  - breakpoints
  - psuedo selectors like hover
- No need for extra CSS or style writing.
- Directly embedded in HTML.

#### Example:

```HTML
<Box sx={{ p: 2, m: 1, bgcolor: 'background.paper' }}>
  <Button variant="contained">Contained</Button>
</Box>
```

### 3. Styled Function

- Utilize the `styled` function from the MUI library API to customize and style your MUI components.
- Apply specific styles to a component to alter its look and how it behaves.

#### When to Use:

- Easier to create reusable components.
- No need to write additional inline styles or CSS classes.

#### Example:

```Javascript
/* In your component file */
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const MyStyledButton = styled(Button)({
  color: 'white',
  backgroundColor: 'green',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
});

/* In your usage */
<MyStyledButton>Styled Button</MyStyledButton>
```

### 4. Normal CSS file

- Exploit the power of a normal CSS file to adjust and style your MUI components.
- Define specific CSS rules in a separate file to modify the look and behavior of your components.

#### When to Use:

- Easier to create reusable components.
- No need to clutter your component file, keep it clean with a separate CSS file.
- When you want to systematically organize and manage styles for MUI components.

#### Example:

```CSS
/* In your styles.css file */
.myButton {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  transition-duration: 0.4s;
}

.myButton:hover {
  background-color: #45a049;
}
```

```Javascript
/* In your component file */
<Button className="myButton">Hover Over Me</Button>
```

### 5. Utilize MUI CSS Classes

- These class names are useful for styling with CSS. They are applied to the component's slots when specific states are triggered.
- Check the official site of MUI APIs and you will find the lists.

#### When to Use:

- Create complex components based on MUI

#### Example:

```CSS
.myButton {
  &.MuiButton-primary-dark: {
	  backgroundColor: theme.palette.common.white,
  }
}

.myTable {
  &.MuiTableRow-root: {
    backgroundColor: theme.palette.primary.main,
  },
}
```

## References
1. [https://www.youtube.com/watch?v=HsdjivqQ7BA]
1. [https://mui.com/material-ui/customization/how-to-customize/]
1. [https://mui.com/blog/making-customizable-components/]