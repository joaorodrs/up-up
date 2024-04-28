import Image from 'next/image'
import { MenuIcon, Instagram, Facebook, Twitter } from 'lucide-react'

import { Button } from './ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from './ui/drawer'

function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center">
      <Image
        src="/up-logo.png"
        alt="Up&Up"
        width={50}
        height={50}
      />
      <Drawer>
        <DrawerTrigger className="p-2">
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
              <Button variant="link" className="px-1 text-md justify-start">About</Button>
              <Button variant="link" className="px-1 text-md justify-start">Work</Button>
              <Button variant="link" className="px-1 text-md justify-start">Service</Button>
              <Button variant="link" className="px-1 text-md justify-start">Contact</Button>
              <Button variant="link" className="px-1 text-md justify-start">Pricing</Button>
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
