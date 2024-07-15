import { ContactForm } from '@components/ContactForm'
import { ContactInfo } from '@components/ContactInfo'
import { ErrorBoundary } from '@components/ErrorBoundary'

const Contact = () => (
  <ErrorBoundary>
    <ContactInfo />
    <ContactForm />
  </ErrorBoundary>
)

export default Contact
