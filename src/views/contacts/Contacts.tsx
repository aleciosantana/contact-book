import { Index, type Component } from 'solid-js'
import { ContactCard } from '../../components/ContactCard'
import { type Contact } from '../../types/contact'

import data from '../../data.json'

const contacts = data.results as unknown as Contact[]

export const Contacts: Component = () => {
  return (
    <div class="bg-slate-100">
      <div class="container mx-auto">
        <div class="flex gap-4 flex-wrap py-4">
          <Index each={contacts}>
            {(contact) => <ContactCard contact={contact()}/>}
          </Index>
        </div>
      </div>
    </div>
  )
}
