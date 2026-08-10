import { useId, useRef, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { SERVICES } from '../data/services';
import { SITE, whatsappLink } from '../siteConfig';

type Fields = { name: string; contact: string; suburb: string; service: string; notes: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', contact: '', suburb: '', service: '', notes: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{7,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  const contact = values.contact.trim();
  if (!contact) {
    errors.contact = 'Add a phone number or email so we can send the quote.';
  } else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) {
    errors.contact = 'That does not look like a phone number or email address.';
  }
  if (!values.suburb.trim()) errors.suburb = 'Which suburb is the job in?';
  if (!values.service) errors.service = 'Choose the service you need.';
  return errors;
}

/** Compact glass quote form for the hero. Posts to the same /api/contact
 *  endpoint as the contact page. */
export default function QuoteForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (touched[key]) setErrors(validate(next));
    };

  // Validate on blur, not on every keystroke: errors while someone is still
  // typing read as the form arguing with them.
  const blur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, contact: true, suburb: true, service: true });

    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(`${uid}-${firstInvalid}`)}`)
        ?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');
    const contact = values.contact.trim();
    const isEmail = EMAIL_RE.test(contact);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: isEmail ? contact : '',
          phone: isEmail ? '' : contact,
          service: values.service,
          message: `Suburb: ${values.suburb.trim()}\n\n${values.notes.trim() || '(no extra detail supplied)'}`,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? 'Something went wrong sending your request.');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong sending your request.'
      );
    }
  }

  const label = 'mb-1.5 block text-[11px] font-medium tracking-[0.14em] text-sand-200';
  // 16px, not smaller: iOS auto-zooms the page when a focused input is under 16px.
  const field =
    'w-full rounded-lg border border-sand-50/20 bg-sand-50/10 px-4 py-2.5 text-[16px] text-sand-50 placeholder:text-sand-500 min-h-[44px] outline-none transition-colors focus:border-sand-50/60';
  const errorClass = 'mt-1.5 text-[12px] text-red-300';

  if (status === 'sent') {
    return (
      <div
        className="liquid-glass rounded-xl border border-sand-50/20 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-sand-50/10">
          <Check size={20} aria-hidden="true" />
        </div>
        <p className="font-medium">Quote request sent</p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-sand-300">
          Thanks {values.name.split(' ')[0]}, we will be in touch shortly. Need us sooner?{' '}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-sand-50"
          >
            WhatsApp us
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby={`${uid}-heading`}
      className="liquid-glass rounded-xl border border-sand-50/20 p-5 sm:p-6"
    >
      <h2 id={`${uid}-heading`} className="text-[17px] font-semibold tracking-tight">
        Get a free quote
      </h2>
      <p className="mt-1 text-[13px] leading-relaxed text-sand-300">
        Tell us the basics and we will come back to you. No obligation.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${uid}-name`}>
            YOUR NAME <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={set('name')}
            onBlur={blur('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            className={field}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} role="alert" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={label} htmlFor={`${uid}-contact`}>
            PHONE OR EMAIL <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-contact`}
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            required
            value={values.contact}
            onChange={set('contact')}
            onBlur={blur('contact')}
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? `${uid}-contact-err` : undefined}
            className={field}
          />
          {errors.contact && (
            <p id={`${uid}-contact-err`} role="alert" className={errorClass}>
              {errors.contact}
            </p>
          )}
        </div>

        <div>
          <label className={label} htmlFor={`${uid}-suburb`}>
            SUBURB <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-suburb`}
            name="suburb"
            type="text"
            autoComplete="address-level2"
            required
            value={values.suburb}
            onChange={set('suburb')}
            onBlur={blur('suburb')}
            aria-invalid={!!errors.suburb}
            aria-describedby={errors.suburb ? `${uid}-suburb-err` : undefined}
            className={field}
          />
          {errors.suburb && (
            <p id={`${uid}-suburb-err`} role="alert" className={errorClass}>
              {errors.suburb}
            </p>
          )}
        </div>

        <div>
          <label className={label} htmlFor={`${uid}-service`}>
            WHAT DO YOU NEED? <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${uid}-service`}
            name="service"
            required
            value={values.service}
            onChange={set('service')}
            onBlur={blur('service')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? `${uid}-service-err` : undefined}
            className={`${field} appearance-none`}
          >
            <option value="" className="bg-soil-900">
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name} className="bg-soil-900">
                {s.name}
              </option>
            ))}
            <option value="Something else" className="bg-soil-900">
              Something else
            </option>
          </select>
          {errors.service && (
            <p id={`${uid}-service-err`} role="alert" className={errorClass}>
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3">
        <label className={label} htmlFor={`${uid}-notes`}>
          ANYTHING ELSE? <span className="tracking-normal text-sand-400">(optional)</span>
        </label>
        <textarea
          id={`${uid}-notes`}
          name="notes"
          rows={2}
          value={values.notes}
          onChange={set('notes')}
          className={`${field} resize-y`}
        />
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-3 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-2.5 text-[13px] text-red-200"
        >
          {serverError} You can also{' '}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WhatsApp us
          </a>{' '}
          or call {SITE.phoneDisplay}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-sand-100 px-8 py-3 font-medium text-soil-950 transition-colors hover:bg-sand-200 disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Request my free quote'
        )}
      </button>

      <p className="mt-3 flex items-center justify-center gap-2 text-[13px] text-sand-300">
        Prefer to chat?{' '}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sand-50 underline-offset-2 hover:underline"
        >
          WhatsApp us
        </a>
      </p>
    </form>
  );
}
