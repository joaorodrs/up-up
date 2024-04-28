import Image from 'next/image'
import { MenuIcon, Instagram, Facebook, Twitter, ArrowRightIcon } from 'lucide-react'

import { Button } from './ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from './ui/drawer'

function Header() {
  return (
    <header className="fixed z-50 w-full p-6 flex justify-between items-center md:px-[5%]">
      <div className="flex items-center space-x-12">
        <Image
          src="/up-logo.png"
          alt="Up&Up"
          width={50}
          height={50}
        />
        <nav className="hidden md:flex space-x-8">
          <Button variant="link" className="px-1 text-md text-white">Sobre</Button>
          <Button variant="link" className="px-1 text-md text-white">Trabalhos</Button>
          <Button variant="link" className="px-1 text-md text-white">Serviços</Button>
          <Button variant="link" className="px-1 text-md text-white">Contato</Button>
        </nav>
      </div>
      <Button variant="outline" className="hidden rounded-full border-primary text-primary md:flex">
        Entre Em Contato
        <ArrowRightIcon className="ml-2" />
      </Button>
      <Drawer>
        <DrawerTrigger className="p-2 md:hidden">
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-8">
            <div className="flex items-center space-x-8">
              <Image
                src="/up-logo.png"
                alt="Up&Up"
                width={50}
                height={50}
              />
              <h1 className="text-xl font-bold">Up&Up Marketing</h1>
            </div>
            <div className="grid grid-cols-2 mt-8 w-[50%]">
              <Button variant="link" className="px-1 text-md justify-start">Sobre</Button>
              <Button variant="link" className="px-1 text-md justify-start">Trabalhos</Button>
              <Button variant="link" className="px-1 text-md justify-start">Serviços</Button>
              <Button variant="link" className="px-1 text-md justify-start">Contato</Button>
            </div>
            <div className="mt-8 space-x-4">
              <Button size="icon" variant="ghost">
                <Instagram />
              </Button>
              <Button size="icon" variant="ghost">
                <Facebook />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

export default Header
