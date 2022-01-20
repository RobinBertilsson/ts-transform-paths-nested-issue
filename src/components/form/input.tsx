import { forwardRef, Ref } from 'react';

export interface InputProps /*extends InputHTMLAttributes<HTMLInputElement>*/ {
  innerRef?: Ref<HTMLInputElement>
}

const InputElement = ({ innerRef }: InputProps) => (
  <input type="text" ref={innerRef} />
)

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return (
    <InputElement innerRef={ref} {...props} />
  )
})
