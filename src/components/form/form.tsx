import { Button } from '~/components/form/button'
import { Input } from '~/components/form/input'
import { FunctionComponent } from 'react'

const FormRoot: FunctionComponent = () => (
  <div>MenuRoot</div>
)

export const Form = Object.assign(FormRoot, {
  Button,
  Input
})
