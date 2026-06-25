import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

const FORM_NAME = 'contact';

export default function ContactFormModal({ open, onClose }) {
  const titleId = useId();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setStatus('idle');
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': FORM_NAME,
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');

      event.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return createPortal(
    <div className="contact-modal" role="presentation" onClick={onClose}>
      <div
        className="contact-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="contact-modal-close" type="button" onClick={onClose} aria-label="Close contact form">
          ×
        </button>
        <p className="contact-modal-kicker">Get in touch</p>
        <h3 id={titleId}>Send a message</h3>
        <p className="contact-modal-copy">
          Share a little about what you&apos;re looking for and I&apos;ll get back to you.
        </p>
        <form
          className="contact-form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="contact-form-hidden" hidden>
            <label>
              Don&apos;t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <label className="contact-form-field">
            <span>Name</span>
            <input name="name" type="text" required autoComplete="name" disabled={status === 'sending'} />
          </label>
          <label className="contact-form-field">
            <span>Email</span>
            <input name="email" type="email" required autoComplete="email" disabled={status === 'sending'} />
          </label>
          <label className="contact-form-field">
            <span>Message</span>
            <textarea name="message" rows="5" required disabled={status === 'sending'} />
          </label>
          <button className="btn btn-primary contact-form-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="contact-form-feedback contact-form-feedback--success" role="status">
              Thanks — your message was sent.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form-feedback contact-form-feedback--error" role="alert">
              Something went wrong. Please try again or email gracehechavarria@gmail.com directly.
            </p>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
}
