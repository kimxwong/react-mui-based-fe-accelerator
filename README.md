# React Component Library

This component library is reusable code that are accessible and can be used across a number of different React projects in order to ensure brand and design consistency and speed up development through reusability. The components are created and updated to meet the [React Playbook](https://bitbucket.org/deloittedigitalcanada/dstudio-react-playbook/src/main/).

A table of the components is available on the projects [confluence](https://deloittedigital.atlassian.net/wiki/spaces/PEA/pages/2908881101/Component+Library) page. In the table it shows which components have unit tests and which ones meet accessibility standards.

### Technologies used:

- React
- Storybook
- Prettier
- Jest

# Getting Started

```bash
# Clone Repository
$ git clone https://[bitbucket_user_name]@bitbucket.org/deloittedigitalcanada/react-fe-accelerator.git
```

```bash
# Install Packages
$ npm install
```

```bash
# Run locally
$ npm start
```

# Developing & Documenting

## Component Best Practices

### Structure

The folder sturcture for the components will look like the following:

```
...
├── components
│   ├── Card
│   │   ├── index.jsx            # exports the default component
│   │   ├── Card.stories.jsx     # story file to be used for development
│   │   ├── Card.jsx             # main component file
│   │   └── Card.test.js         # unit tests to check component rendering
...
```

- All component-related files should have a `.jsx` file entension
- Place variants in the folder of its associated component and add to the exports in `index.jsx` (e.g. a Button can have a `Primary` and `Secondary` variant, etc. which can live in a `Buttons` folder)

```
...
├── components
|   ├── Buttons
│   |   ├── GroupButton
│   │   |   ├── index.jsx                   # exports the default component
│   │   |   ├── GroupButton.stories.jsx     # story file to be used for development
│   │   |   ├── GroupButton.jsx             # main component file
│   │   |   └── GroupButton.test.js         # unit tests to check component rendering
...
```

### Imports

- Please use absolute imports instead of releatice imports.
- Please import files in a consistent way for code readability across files.
- Built-in hooks like `useState` and `useEffect` can be imported at the top of the file instead of in the code like `React.useState`

Suggested import order:

```jsx
// built-in
import { useState, useEffect } from 'react'

// internal components, helpers, styles, assets
import Link from 'components/Link' // <--- Absolute Imports
```

## Naming

Naming conventions provide consistency betweens components.

#### Variables

| Type     | Convention                | Examples                    | Description                                                                |
| -------- | ------------------------- | --------------------------- | -------------------------------------------------------------------------- |
| Regular  | `camelCase`               | `defaultChecked`, `inputId` | Boolean variables start with a verb, followed by the state to test against |
| Constant | `ALL_CAPS_SNAKE_CASE`     | `INPUT_TYPES`               | Constant variables (not objects) are all uppercased                        |
| Boolean  | `is<State>`, `has<State>` | `isActive`, `hasError`      | Boolean variables start with a verb, followed by the state to test against |

#### React Props

Same as variables naming, plus:

| Type              | Convention        | Examples                          | Description                                                                            |
| ----------------- | ----------------- | --------------------------------- | -------------------------------------------------------------------------------------- |
| Native attributes | Keep as is        | `<TextInput required disabled />` | We do not alter the properties that we pass down to the native HTML elements           |
| React event       | Keep as is        | `onChange`, `onClick`             | We do not alter the React event names                                                  |
| Custom event      | `on<Event>`       | `onError`, `onOpen`               | We keep the React event naming convention for our custom events                        |
| Render prop       | `render<Element>` | `renderInput`                     | We prefix the prop that renders an element with `render`, followed by the element name |

#### Functions

| Type          | Convention            | Examples                                  | Description                                                                              |
| ------------- | --------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| Hooks         | `<name>`, `set<Name>` | `[formattedAddress, setFormattedAddress]` | Declare a new state variable alongside its state setter                                  |
| Event handler | `on<Event>Handler`    | `onClickHandler`, `onOpenHandler`         | Event props are prefixed with `on` and suffixed with `Handler` to denote it's a callback |

### Storybook

This repository uses [storybook](https://storybook.js.org/) to document and provide a playground to visually see the components. [See the guide for writing stories](https://storybook.js.org/docs/react/writing-stories/introduction)

```bash
# Start storybook environment
$ npm run storybook
```

### Testing

To manually run tests simply use the following command in the root directory

```bash
# Run Jest and React Library tests
$ npm run test
```
