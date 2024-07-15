import { useState } from 'react'

import {
  EMAIL_PLACEHOLDER,
  MESSAGE_PLACEHOLDER,
  NAME_PLACEHOLDER,
  SUBMIT_NAME,
} from './constants'
import { Button, Form, Input, TextArea } from './styled'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Form>
      <Input
        type="text"
        placeholder={NAME_PLACEHOLDER}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder={EMAIL_PLACEHOLDER}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextArea
        placeholder={MESSAGE_PLACEHOLDER}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
      />
      <Button type="submit">{SUBMIT_NAME}</Button>
    </Form>
  )
}
