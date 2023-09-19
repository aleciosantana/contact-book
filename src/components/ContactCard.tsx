import { type Component } from 'solid-js'
import { type Contact } from '../types/contact'

interface Props { contact: Contact, onSelect: (p: { contact: Contact }) => void }

const ContactCard: Component<Props> = (props) => {
  const handerClick = (): void => { props.onSelect({ contact: props.contact }) }
  const handerKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') props.onSelect({ contact: props.contact })
  }

  return (
    <div
      tabIndex="0"
      onClick={handerClick}
      onKeyDown={handerKeyDown}
      class="hover:ring focus:ring outline-none border-solid shadow-md bg-white p-2 rounded-md flex gap-4 items-center grow"
    >
      <img src={props.contact.picture.medium} class="w-20 h-20 object-cover rounded-full" />
      <div class="w-56">
        <div class="capitalize text-xl text-blue-600 text-ellipsis overflow-hidden font-bold">
          {props.contact.name.first} {props.contact.name.last}
        </div>
        <div class="text-gray-700 text-ellipsis overflow-hidden">
          {props.contact.email}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
