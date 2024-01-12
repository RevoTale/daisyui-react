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


### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
