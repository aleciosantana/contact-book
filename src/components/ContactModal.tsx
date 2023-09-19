import { onMount, type Component, onCleanup } from 'solid-js'
import { type Contact } from '../types/contact'

interface Props { contact: Contact, onClose: (p: { contact: Contact }) => void }

const ContactModal: Component<Props> = props => {
  const handlerkeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') props.onClose({ contact: props.contact })
  }
  onMount(() => {
    window.addEventListener('keydown', handlerkeyDown)
  })

  onCleanup(() => {
    window.removeEventListener('keydown', handlerkeyDown, false)
  })

  return (
    <div
      onClick={() => { props.onClose({ contact: props.contact }) }}
      class="absolute top-0 h-full w-full bg-slate-700/70 flex justify-center items-center p-4"
    >
      <div class="container md:max-w-3xl mx-auto bg-white rounded-md p-4">
        <div class="flex flex-col">
          <img src={props.contact?.picture.large} class="w-48 h-48 mx-auto object-cover rounded-full" />
          <div class="mx-auto capitalize text-xl text-blue-600 text-ellipsis overflow-hidden font-bold">
            {props.contact?.name.first} {props.contact?.name.last}
          </div>
          <div class="mx-auto text-ellipsis overflow-hidden font-bold">
            {props.contact?.email}
          </div>
        </div>

        <table class="border-collapse table-auto w-full text-sm text-left">
          <tbody>
            <tr>
              <th>Genero</th>
              <td colspan="3">{props.contact?.gender}</td>
            </tr>
            <tr>
              <th>Endereco</th>
              <td colspan="3">{props.contact?.location.street}</td>
            </tr>
            <tr>
              <th>Telefone</th>
              <td>{props.contact?.phone}</td>
              <th>Celular</th>
              <td>{props.contact?.phone}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-4">
          <button onClick={() => { props.onClose({ contact: props.contact }) }} class="text-lg rounded-md py-2 bg-blue-500 text-white px-4 outline-none focus:ring">Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
