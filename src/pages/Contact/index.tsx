import { FC } from 'react'
import { ContactForm } from '@components/ContactForm'
import { ContactInfo } from '@components/ContactInfo'
import { ErrorBoundary } from '@components/ErrorBoundary'

const Contact: FC = () => (
  <ErrorBoundary>
    <ContactInfo />
    <ContactForm />
  </ErrorBoundary>
)

export default Contact
