import Link from 'next/link';

interface ILink {
  href: string;
  title: string;
}

const MenuItems = () => {
  const links: ILink[] = [
    {href: '/', title: 'Home'},
    {href: '/about', title: 'About'},
  ];

  return links.map((link) => (
    <li key={link.title}>
      <Link href={link.href}>{link.title}</Link>
    </li>
  ));
};

export default MenuItems;