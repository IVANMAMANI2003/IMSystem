import logoLight from '@/assets/logos/noBgColor.png';
import logoDark from '@/assets/logos/noBgWhite.png';
import { display, routes } from '@/resources';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { path: '/', label: 'Home', icon: '' },
  { path: '/about', label: 'About', icon: '' },
  { path: '/work', label: 'Work', icon: '' },
  { path: '/blog', label: 'Blog', icon: '' },
  { path: '/gallery', label: 'Gallery', icon: '' },
  { path: '/contact', label: 'Contact', icon: '' },
];

const TimeDisplay = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <>{time}</>;
};

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-18 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoLight}
            alt="IMSystem"
            className="h-14 w-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="IMSystem"
            className="hidden h-14 w-auto dark:block"
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
          {navItems.map((item) => {
            if (routes[item.path as keyof typeof routes] === false) return null;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
                }`}
              >
                <span className="text-xs">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Time + Theme */}
        <div className="flex items-center gap-3">
          {display.time && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              <TimeDisplay timeZone="America/Lima" />
            </span>
          )}
          {display.themeSwitcher && <ThemeToggle />}
        </div>
      </div>
    </header>
  );
};
