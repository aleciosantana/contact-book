import { type JSX } from 'solid-js'
import { Router, Route, Routes, Navigate, hashIntegration } from '@solidjs/router'
import { Contacts } from './views/contacts/Contacts'

function App (): JSX.Element {
  return (
    <Router source={hashIntegration()}>
      <Routes>
        <Route path="/" element={<Navigate href="/contacts" />} />
        <Route path="/contacts" component={Contacts} />
      </Routes>
    </Router>
  )
}

export default App
