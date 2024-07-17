import React from "react"
import { RouterProvider } from "react-router-dom"
import { _ROUTER } from "./routers"

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={_ROUTER} />
    </React.Fragment>
  )
}

export default App
