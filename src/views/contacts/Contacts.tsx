import { type Component, createSignal, For } from 'solid-js'
import { ContactCard } from '../../components/ContactCard'
import { SearchInput } from '../../components/SearchInput'
import { type Contact } from '../../types/contact'

import data from '../../data.json'

const contacts = data.results as unknown as Contact[]

export const Contacts: Component = () => {
  const [name, setName] = createSignal('')

  const filteredContacts = (): Contact[] => contacts.filter(contact => {
    const search = new RegExp(name(), 'gi')
    const { first, last } = contact.name

    return [first, last].some(name => search.test(name))
  })

  return (
    <div class="bg-slate-100 h-screen">
      <div class="container mx-auto p-4">
        <SearchInput value={name()} onInput={e => setName(e.currentTarget.value)} />
        <div class="flex gap-4 flex-wrap py-4">
          <For each={filteredContacts()}>
            {(contact) => <ContactCard contact={contact}/>}
          </For>
        </div>
      </div>
    </div>
  )
}
