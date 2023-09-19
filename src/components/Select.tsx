import type { JSX, Component } from 'solid-js'

type Props = JSX.SelectHTMLAttributes<HTMLSelectElement>

export const Select: Component<Props> = (props) =>
  <select {...props} class="bg-white text-lg rounded-md p-2 outline-none focus:ring" />

export default Select
