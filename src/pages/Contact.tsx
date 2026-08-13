import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import ReviewStrip from '../components/ReviewStrip';
import { SERVICES } from '../data/services';
import { ALL_AREAS, SITE, whatsappLink } from '../siteConfig';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.error ?? 'Something went wrong sending your message.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong sending your message.');
    }
  }

  const inputClass =
    'w-full rounded-lg border border-sand-50/20 bg-sand-50/5 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-500 outline-none transition-colors focus:border-clay-400';

  return (
    <>
      <Header />
      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Let&apos;s talk about your project
          </h1>
          <p className="text-sand-300 text-base md:text-lg leading-relaxed">
            Free quotes anywhere in Auckland. Message us on WhatsApp for the fastest reply, call
            during work hours, or use the form and we will get back to you.
          </p>
          <ReviewStrip className="mt-6" />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-14 pb-4 grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          {status === 'sent' ? (
            <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-12 text-center">
              <CheckCircle2 size={40} className="mx-auto mb-4 text-sand-50" aria-hidden="true" />
              <h2 className="text-2xl font-normal mb-2">Message sent</h2>
              <p className="text-sand-300">
                Thanks, we have your details and will be in touch shortly. Need us sooner?{' '}
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline hover:text-clay-300">
                  WhatsApp us
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="liquid-glass rounded-xl border border-sand-50/20 p-6 md:p-8" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-sand-200">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-sand-200">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="mb-1.5 block text-sm text-sand-200">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
              </div>
              <div className="mt-4">
                <label htmlFor="service" className="mb-1.5 block text-sm text-sand-200">
                  What do you need done?
                </label>
                <select id="service" name="service" defaultValue="" className={inputClass}>
                  <option value="" className="bg-soil-900">
                    Choose a service (optional)
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
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm text-sand-200">
                  Tell us about the job <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Address or suburb, what you need done, and rough timing."
                  className={inputClass}
                />
              </div>
              {/* Honeypot: humans never see or fill this. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              {status === 'error' && (
                <p role="alert" className="mt-4 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error} You can also{' '}
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline">
                    WhatsApp us
                  </a>{' '}
                  or call {SITE.phoneDisplay}.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-clay-500 px-8 py-3 font-medium text-soil-950 transition-colors hover:bg-clay-400 disabled:opacity-60"
              >
                {status === 'sending' && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>

        {/* Direct contact */}
        <div className="lg:col-span-2 space-y-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass flex items-center gap-4 rounded-xl border border-sand-50/20 p-6 transition-colors hover:border-clay-400/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-soil-950">
              <MessageCircle size={22} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-medium">WhatsApp us</span>
              <span className="block text-sm text-sand-300">Fastest way to reach us: {SITE.phoneDisplay}</span>
            </span>
          </a>
          <a
            href={SITE.phoneHref}
            className="liquid-glass flex items-center gap-4 rounded-xl border border-sand-50/20 p-6 transition-colors hover:border-clay-400/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-50/10">
              <Phone size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-medium">Call {SITE.phoneDisplay}</span>
              <span className="block text-sm text-sand-300">{SITE.hours}</span>
            </span>
          </a>
          <div className="liquid-glass rounded-xl border border-sand-50/20 p-6 space-y-3 text-sm text-sand-300">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Based in {SITE.address.suburb}, {SITE.address.city} {SITE.address.postcode}
                <br />
                Yard at {SITE.depot.suburb}, {SITE.depot.region}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Clock size={16} className="shrink-0" aria-hidden="true" />
              {SITE.hours}
            </p>
            <p className="pt-2 border-t border-sand-50/10">
              Serving {ALL_AREAS.join(', ')}, and New Zealand wide for larger projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
