import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants';

export const NavigationList = () => {
  return (
    <ul>
      {NAVIGATION_LINKS.map(({ label, link }, i) => (
        <li key={`nav-${i}`}>
          <Link href={`${link}`} passHref prefetch={false}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
