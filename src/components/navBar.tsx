import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <header className="wrapper flex flex-row justify-between items-center gap-10">
      <Link href="/">
        <h1 className="font-bold text-xl">UNISPORTS</h1>
      </Link>
      <nav className="flex flex-row flex-auto justify-end">
        <ul className="hidden md:flex md:flex-row md:flex-auto md:gap-8">
          <NavItem href="/" name="Home" />
          <NavItem href="/men" name="Men" />
          <NavItem href="/women" name="Women" />
          <NavItem href="/kids" name="Kids" />
        </ul>
        <ul className="flex flex-row gap-5 items-center">
          <NavItem
            href="/login"
            name="Login"
            isBold={true}
            hideOnMobile={true}
          />
          <NavItem href="/search" icon="search.svg" />
          <NavItem href="/cart" icon="shopping-cart.svg" />
          <img className="md:hidden" src={`/icons/menu.svg`} alt="menu" />
        </ul>
      </nav>
    </header>
  );
}

interface NavItemProps {
  href: string;
  name?: string;
  icon?: string;
  isBold?: boolean;
  hideOnMobile?: boolean;
}
function NavItem({ href, name, icon, isBold, hideOnMobile }: NavItemProps) {
  const classNames = `uppercase text-lg ${isBold ? 'font-bold' : 'font-light'} hover:font-bold hover:underline hover:underline-offset-8 hover:decoration-2`;
  const hideOnMobileClassName = `${hideOnMobile ? 'hidden md:flex' : ''}`;
  return (
    <li className={hideOnMobileClassName}>
      <Link href={href} className={classNames}>
        {icon && <img src={`/icons/${icon}`} alt={name} />} {!icon && name}
      </Link>
    </li>
  );
}

export default NavBar;
