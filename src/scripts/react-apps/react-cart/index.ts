import ReactDOM from 'react-dom'
import React from 'react'
import TheCartDrawer from './components/TheCartDrawer/TheCartDrawer'

const rootId = 'react-cart-drawer'
const rootEl = document.getElementById(rootId)

rootEl && ReactDOM.render(
  React.createElement(TheCartDrawer),
  rootEl
)