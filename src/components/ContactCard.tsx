import { type Component } from 'solid-js'
import { type Contact } from '../types/contact'
import { A } from '@solidjs/router'

const ContactCard: Component<{ contact: Contact }> = (props) => (
  <A href="" class="hover:ring focus:ring outline-none border-solid shadow-md bg-white p-2 rounded-md flex gap-4 items-center grow">
    <img src={props.contact.picture.medium} class="w-20 h-20 object-cover rounded-full" />
    <div class="w-56">
      <div class="capitalize text-xl text-blue-600 text-ellipsis overflow-hidden font-bold">
        {props.contact.name.first} {props.contact.name.last}
      </div>
      <div class="text-gray-700 text-ellipsis overflow-hidden">
        {props.contact.email}
      </div>
    </div>
  </A>
)

export default ContactCard
