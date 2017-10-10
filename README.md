# hyperapp-module-view
[![Travis CI](https://img.shields.io/travis/swizz/hyperapp-module-view/master.svg)](https://travis-ci.org/swizz/hyperapp-module-view)
[![npm](https://img.shields.io/npm/v/hyperapp-module-view.svg)](https://www.npmjs.org/package/hyperapp-module-view)
[![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Use you module view as component today !

## Installation

Using [npm](https://npmjs.com):

<pre>
npm i <a href="https://www.npmjs.com/package/hyperapp-module-view">hyperapp-module-view</a>
</pre>

Then setup a [build pipeline](https://github.com/hyperapp/hyperapp/blob/master/docs/getting-started.md#build-pipeline) and import it.

```jsx
import { app } from "hyperapp-module-view"
```

Using a CDN:

```html
<script src="https://unpkg.com/hyperapp-module-view"></script>
```

Then use `moduleView.app`.

## Example

[Try it online](#)

```jsx
import { app } from "hyperapp-module-view"

const counter = {
  state: {
    count: 0
  },
  actions: {
    down: state => ({ count: state.count - 1 }),
    up: state => ({ count: state.count + 1 })
  },
  view: (state, actions) => (
    div([
      h2(state.count),
      button({
        onclick: actions.down,
        disabled: state.count <= 0
      }, "ー"),
      button({
        onclick: actions.up
      }, "＋")
    ]),
  )
}

app({
  modules: { counter },
  view(state, actions, { counter }) {
    main([
      h1("The counter :"),
      counter()
    ])
  }
})
```

## API

### app
The pre-ehanced hyperapp app function

```jsx
import { app } from "hyperapp-module-view"

app(Props)
```

### moduleView
The HOA to enhance hyperapp app function

```jsx
import { moduleView } from "hyperapp-module-view"

app(moduleView)(Props)
```

## License

hyperapp-module-view is MIT licensed. See [LICENSE](LICENSE.md).
