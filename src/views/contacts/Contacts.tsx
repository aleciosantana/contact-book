import { type Component, createSignal, For, Index, Show } from 'solid-js'
import { ContactCard, ContactModal, SearchInput, Select } from '../../components'
import { type Contact } from '../../types/contact'

import data from '../../data.json'
import { createStore } from 'solid-js/store'

const contacts = data.results as unknown as Contact[]
const states = [...new Set(contacts.map(contact => contact.location.state))]

export const Contacts: Component = () => {
  const [name, setName] = createSignal('')
  const [state, setState] = createSignal('')
  const [contact, setContact] = createStore<Contact | any>({})

  const filteredContacts = (): Contact[] => contacts
    .filter(contact => state() !== '' ? contact.location.state === state() : true)
    .filter(contact => {
      const search = new RegExp(name(), 'gi')
      const { first, last } = contact.name

      return [first, last].some(name => search.test(name))
    })

  return (
    <div class="h-screen overflow-hidden relative">
      <div class="h-full flex flex-col bg-slate-100">
        <div class="container mx-auto flex gap-4 p-4">
          <SearchInput value={name()} onInput={e => setName(e.currentTarget.value)} />
          <Select value={state()} onChange={e => setState(e.currentTarget.value)}>
            <option selected value="">Todos</option>
            <Index each={states}>
              {item => <option value={item()}>{item()}</option>}
            </Index>
          </Select>
        </div>
        <div class="grow overflow-auto">
          <div class="container mx-auto flex grow gap-4 flex-wrap p-4">
            <For each={filteredContacts()}>
              {item => <ContactCard contact={item} onSelect={e => { setContact(e.contact) }} />}
            </For>
          </div>
        </div>
      </div>
      <Show when={contact.email}>
        <ContactModal contact={contact} onClose={() => { setContact({ email: '' }) }} />
      </Show>
    </div>
  )
}
