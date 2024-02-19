'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayClassName = `z-50 bg-white fixed ${!isOpen ? 'hidden' : ' '} w-full h-full left-0 right-0 top-0 bottom-0`;

  return (
    <>
      <header className="wrapper mt-5 flex flex-row justify-between items-center gap-10">
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
            <Image
              width={28}
              height={28}
              className="md:hidden hover:cursor-pointer"
              src={`/icons/menu.svg`}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          </ul>
        </nav>
      </header>
      <div className={overlayClassName}>
        <div className="wrapper mt-5 flex justify-between items-center">
          <Link href="/">
            <h1 className="font-bold text-xl">UNISPORTS</h1>
          </Link>
          <Image
            width={28}
            height={28}
            className="md:hidden hover:cursor-pointer"
            src={`/icons/close.svg`}
            alt="menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <nav className="wrapper mt-10">
          <ul className="flex flex-col gap-y-6">
            <NavItem href="/" name="Home" />
            <NavItem href="/men" name="Men" />
            <NavItem href="/women" name="Women" />
            <NavItem href="/kids" name="Kids" />
          </ul>
        </nav>
      </div>
    </>
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
        {icon && (
          <Image
            width={28}
            height={28}
            src={`/icons/${icon}`}
            alt={name ?? 'navigation'}
          />
        )}{' '}
        {!icon && name}
      </Link>
    </li>
  );
}

export default NavBar;
