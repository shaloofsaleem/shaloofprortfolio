'use client';

import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Adjust this path to match your project structure
import Link from 'next/link'; // Correct import for Next.js
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname(); // Fix casing to match the hook's variable name

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center p-6">
        {/* Logo */}
        <div className="mt-10 mb-12 text-center text-2xl">
          <Link href="/">
            <h2 className="text-4xl font-semibold">
              Shaz<span className="text-accent">.</span>
            </h2>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index} // Assign key to the root element in a map
              className={`capitalize font-medium transition-all ${
                link.path === pathname
                  ? 'text-accent border-b-2 border-accent'
                  : 'hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
