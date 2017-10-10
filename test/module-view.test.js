import { h, app as h_app } from "hyperapp"
import { app, moduleView } from "../src/module-view"

window.requestAnimationFrame = setTimeout

beforeEach(() => {
  document.body.innerHTML = ""
})

test("simple module view using app", done => {
  const module = {
    state: {
      value: 1
    },
    view(state) {
      return h("h1", {}, state.value)
    }
  }

  app({
    modules: { module },
    view(state, actions, { Module }) {
      return h("div", {
        oncreate() {
          expect(document.body.innerHTML).toBe("<div><h1>1</h1></div>")
          done()
        }
      },[
        Module()
      ])
    }
  })
})

test("simple module view using moduleView", done => {
  const module = {
    state: {
      value: 1
    },
    view(state) {
      return h("h1", {}, state.value)
    }
  }

  moduleView(h_app)({
    modules: { module },
    view(state, actions, { Module }) {
      return h("div", {
        oncreate() {
          expect(document.body.innerHTML).toBe("<div><h1>1</h1></div>")
          done()
        }
      },[
        Module()
      ])
    }
  })
})

test("sub module view", done => {
  const submodule = {
    state: {
      value: 1
    },
    view(state) {
      return h("h1", {}, state.value)
    }
  }

  const module = {
    state: {
      value: 2
    },
    modules: { submodule },
    view(state, actions, { Submodule }) {
      return h("div", {}, [
        h("h1", {}, state.value),
        Submodule()
      ])
    }
  }

  app({
    modules: { module },
    view(state, actions, { Module }) {
      return h("div", {
        oncreate() {
          expect(document.body.innerHTML).toBe("<div><div><h1>2</h1><h1>1</h1></div></div>")
          done()
        }
      },[
        Module()
      ])
    }
  })
})