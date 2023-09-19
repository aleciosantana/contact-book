import { type Component, createSignal, For, Index } from 'solid-js'
import { ContactCard, SearchInput, Select } from '../../components'
import { type Contact } from '../../types/contact'

import data from '../../data.json'

const contacts = data.results as unknown as Contact[]
const states = [...new Set(contacts.map(contact => contact.location.state))]

export const Contacts: Component = () => {
  const [name, setName] = createSignal('')
  const [state, setState] = createSignal('')

  const filteredContacts = (): Contact[] => contacts
    .filter(contact => state() !== '' ? contact.location.state === state() : true)
    .filter(contact => {
      const search = new RegExp(name(), 'gi')
      const { first, last } = contact.name

      return [first, last].some(name => search.test(name))
    })

  return (
    <div class="bg-slate-100 h-screen">
      <div class="container mx-auto p-4">
        <div class="flex gap-4 py-4">
          <SearchInput value={name()} onInput={e => setName(e.currentTarget.value)} />
          <Select value={state()} onChange={e => setState(e.currentTarget.value)}>
            <option selected value="">Todos</option>
            <Index each={states}>
              {item => <option value={item()}>{item()}</option>}
            </Index>
          </Select>
        </div>
        <div class="flex gap-4 flex-wrap py-4">
          <For each={filteredContacts()}>
            {(contact) => <ContactCard contact={contact}/>}
          </For>
        </div>
      </div>
    </div>
  )
}
