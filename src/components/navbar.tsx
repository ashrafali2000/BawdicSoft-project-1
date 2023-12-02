"use client"
import React, { FC, Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { TiArrowSortedDown } from "react-icons/ti";
import logo from "../../public/images/logo.png"
import Image from 'next/image';
import DropDown from './home/dropDown';
interface ServicesList {
  name: string;
  description: string;
  href: string;
  icon: FC;
}

interface BlockChaninList {
  name: string;
  href: string;
  icon: FC;
}
interface NFTList {
  name: string;
  description: string;
  href: string;
  icon: FC;
}

const servicesList: ServicesList[] = [
  { name: 'Web Application', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'E-Commerce', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
];
const nftList: NFTList[] = [
  { name: 'Web Application', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'E-Commerce', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
];

const blockChaninList: BlockChaninList[] = [
  { name: 'DeFI', href: '#', icon: PhoneIcon },
  { name: 'Cryptocurrency Exchange', href: '#', icon: PhoneIcon },
  { name: 'Token Development', href: '#', icon: PhoneIcon },
];

interface NavbarProps { }

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

const Navbar: FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white sticky top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 gap-3 items-center ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className=" w-auto hidden md:block"
              src={logo}
              alt=""
              width={40}
              height={40}
            />
          </a>
          <p className='text-sky-600 text-[23px] -ml-2 md:m-0 md:text-[30px] font-semibold md:font-bold'>BawdicSoft</p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Home
          </a>
          <DropDown />
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Portfolio
          </a>
          <a href="/about-us" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            About Us
          </a>
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Careers
          </a>
          <a href="/contact-us" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Contact Us
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-[120px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <TiArrowSortedDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 font-black text-blue-500 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="ml-5">

                        {/* Blockchain list */}
                        <Disclosure as="div" className="-ml-2">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-[120px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Blockchain
                                <TiArrowSortedDown
                                  className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 font-black text-blue-500 flex-none')}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="ml-5">
                                 {/* NFT list */}
                        <Disclosure as="div" className="-ml-1">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-[80px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                NFT
                                <TiArrowSortedDown
                                  className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 font-black text-blue-500 flex-none')}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="ml-5">
                                {[...nftList].map((item) => (
                                  <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                ))}

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                                {[...blockChaninList].map((item) => (
                                  <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                ))}

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        {[...servicesList].map((item) => (
                          
                          <Disclosure.Button

                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 p-1 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            
                            {item.name}
                          </Disclosure.Button>
                        ))}

                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Portfolio
                </a>
                <a
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </a>
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;