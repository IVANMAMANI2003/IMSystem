import { person, social } from '@/resources';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {currentYear} <span className="text-primary font-medium">{person.name}</span>
        </p>

        <div className="flex gap-4">
          {social.map(
            (item) =>
              item.link && (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 transition-colors hover:bg-primary hover:text-white hover:border-primary dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary"
                  title={item.name}
                >
                  {item.icon === 'github' && '⌘'}
                  {item.icon === 'linkedin' && 'in'}
                  {item.icon === 'instagram' && '◎'}
                  {item.icon === 'email' && '✉'}
                </a>
              )
          )}
        </div>
      </div>
    </footer>
  );
};
