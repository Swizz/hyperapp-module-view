import { app as h_app } from "hyperapp"

export function moduleView(app) {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

  return function wireModule(props, isModule) {
    const view = props.view

    for (var name in props.modules) {
      props.modules[name] = wireModule(props.modules[name], true)
    }

    props.view = function(state, actions) {
      const components = {}

      for (var name in props.modules) {
        const module = props.modules[name]
        components[capitalize(name)] = module.view.bind(
          null,
          state[name],
          actions[name]
        )
      }

      return view(state, actions, components)
    }

    return isModule ? props : app(props)
  }
}

export const app = moduleView(h_app)