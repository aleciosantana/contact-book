import type { JSX, Component } from 'solid-js'

type Props = JSX.InputHTMLAttributes<HTMLInputElement>
export const SearchInput: Component<Props> = (props) =>
  <input {...props} class="w-full text-lg rounded-md p-2 outline-none focus:ring" />
