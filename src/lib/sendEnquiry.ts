/**
 * Contact form delivery via Web3Forms.
 *
 * Why not a serverless function plus Resend: Resend will only send from a
 * verified domain, and Jai Civil has no domain yet (the site still runs on
 * jai-civil.vercel.app). Its fallback sender, onboarding@resend.dev, only
 * delivers to the Resend account owner's own address, which is not the
 * client's inbox. Web3Forms has no such restriction, so enquiries reach
 * jaicivilltd@gmail.com today with no DNS work.
 *
 * Swap back to Resend once jaicivil.co.nz is registered and verified: the
 * form only calls sendEnquiry(), so the change is confined to this file.
 *
 * The access key is a public, write-only submission token, not a secret. It
 * only permits posting to the inbox it was issued for, which is why it can
 * live in client-side code at all.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';

/** Public write-only submission token for jaicivilltd@gmail.com, supplied by the
 *  owner 2026-08-18. Not a secret: it only permits posting to that one inbox. */
export const WEB3FORMS_ACCESS_KEY = '05fd93fd-96aa-494e-81b1-1ee803205925';

export type Enquiry = {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  message: string;
  /** Honeypot. A filled value means a bot; we drop it silently. */
  website?: string;
};

export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
  // Honeypot: pretend it worked so the bot does not retry.
  if (enquiry.website) return;

  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('REPLACE_WITH')) {
    throw new Error('The contact form is not connected yet.');
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Website enquiry: ${enquiry.name}${enquiry.service ? ` (${enquiry.service})` : ''}`,
      from_name: 'Jai Civil website',
      // Web3Forms uses this for the reply-to header, so hitting reply in Gmail
      // goes to the customer rather than to Web3Forms.
      ...(enquiry.email ? { email: enquiry.email } : {}),
      name: enquiry.name,
      phone: enquiry.phone || 'Not given',
      service: enquiry.service || 'Not specified',
      message: enquiry.message,
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.success === false) {
    throw new Error(body.message ?? 'We could not send that just now. Please try again.');
  }
}
