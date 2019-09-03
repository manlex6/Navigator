import React from 'react'
import { hot } from 'react-hot-loader'
import data from './data.json'
import Form from './Form'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        <code>{JSON.stringify(data)}</code>
        <Form data={data}></Form>
      </div>
    )
  }
}

export default hot(module)(App)
