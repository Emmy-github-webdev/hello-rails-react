import React, {Fragment} from "react"
import { BrowserRouter as Router, Route, Routes, Toute } from "react-router-dom"


const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          < Route exact path="/" element={< Greeting />}/>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
