**daisyUI components built with React, Typescript and TailwindCSS**

Components are supporting React Server Components!
# daisyui-react 🌼

---
## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install daisyui-react
```
or
```bash
pnpm install daisyui-react
```
To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/daisyui-react/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
}
```

## ⚡ Quick Start

Import daisyui-react components within your component files:

```js
import { Button } from 'daisyui-react'

export default (props) => {
  return <Button color="primary">Click me!</Button>
}
```

## 🎨 Themes

To apply a theme (or multiple themes) to a page or components, import the Theme component and wrap your content:



Use tools like the official <a href="https://daisyui.com/theme-generator/">daisyUI Theme Generator</a> or <a href="https://themes.ionevolve.com/">daisyUI Theme Builder</a> to easily create your own themes.

---

## ⚙️ Components

<details>
<summary>Actions:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/actions-button">Button</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-dropdown">Dropdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-modal">Modal</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-swap">Swap</a>
- [ ] Theme Controller
</details>

<details>
<summary>Data Display:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/data-display-accordion">Accordion</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-avatar">Avatar</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-badge">Badge</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-card">Card</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-carousel">Carousel</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-chart-bubble">Chart Bubble</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-collapse">Collapse</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-countdown">Countdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-diff">Diff<a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-kbd">Kbd</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-stats">Stats</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-table">Table</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-timeline">Timeline</a>
</details>

<details>
<summary>Navigation:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/navigation-bottomnavigation">Bottom Navigation</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-breadcrumbs">Breadcrumbs</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-link">Link</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-menu">Menu</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-navbar">Navbar</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-pagination">Pagination</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-steps">Steps</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-tabs">Tabs</a>
</details>

<details>
<summary>Feedback:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/feedback-alert">Alert</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-loading">Loading</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-progress">Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-radial-progress">Radial Progress</a>
- [ ] Skeleton
- [x] <a href="https://react.daisyui.com/?path=/story/feedback-toast">Toast</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-tooltip">Tooltip</a>
</details>

<details>
<summary>Data Input:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/data-input-checkbox">Checkbox</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-fileinput">FileInput</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-input">Input</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-radio">Radio</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-range">Range</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-rating">Rating</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-select">Select</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-textarea">Textarea</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-toggle">Toggle</a>
</details>

<details>
<summary>Layout:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/layout-artboard">Artboard</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-buttongroup">Button Group (Deprecated)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-divider">Divider</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-drawer">Drawer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-footer">Footer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-hero">Hero</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-indicator">Indicator</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-inputgroup">Input Group (Deprecated)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-join">Join (group items)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-mask">Mask</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-stack">Stack</a>
</details>

<details>
<summary>Mockup:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/mockup-browser">Browser</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-code">Code</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-phone">Phone</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-window">Window</a>
</details>


### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
