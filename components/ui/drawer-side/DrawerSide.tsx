'use client';

import Link from 'next/link';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import {ILink} from '@/types/ui';

const DrawerSide = () => {
  const pathname = usePathname();

  // const themeList: string[] = ['dark', 'dim', 'cupcake', 'nord', 'pastel'];
  const links: ILink[] = [
    {
      href: '/',
      title: 'Home',
      icon: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    },
    {
      href: '/about',
      title: 'About',
      icon: 'm11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z',
    },
  ];

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="drawer-side">
      <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {links.map(({href, title, icon}) => (
          <li key={title}>
            <Link
              href={href}
              className={clsx({active: isActive(href)})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
              </svg>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerSide;