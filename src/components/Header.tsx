import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6 relative z-40">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          JAI CIVIL LIMITED
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-sand-300 ${isActive ? 'text-sand-50' : 'text-sand-100'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-sand-100 text-soil-950 px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-sand-200"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-1 rounded-lg transition-colors hover:bg-sand-50/10"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden liquid-glass rounded-xl mt-2 p-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-base transition-colors hover:bg-sand-50/10 ${
                  isActive ? 'text-sand-50 bg-sand-50/5' : 'text-sand-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-sand-100 text-soil-950 px-6 py-3 rounded-lg text-sm font-medium text-center transition-colors hover:bg-sand-200"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </div>
  );
}
