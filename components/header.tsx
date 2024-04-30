import { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, Instagram, Facebook, Twitter, ArrowRightIcon } from 'lucide-react'
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

import { Button } from './ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from './ui/drawer'

const nav = ["Sobre", "Trabalhos", "Serviços", "Contato"]

const navContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const navItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

function Header() {
  const { scrollYProgress } = useScroll()

  const [prevScroll, setPrevScroll] = useState(0)
  const [hidden, setHidden] = useState(false)

  function update(latest: number, prev: number) {
    if (latest < prev) {
      setHidden(false)
      return
    }

    setHidden(true)
  }

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    update(latest, prevScroll)
    setPrevScroll(latest)
  })

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        hidden: { y: '-100%' },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed z-50 w-full p-6 flex justify-between items-center md:px-[5%] backdrop-blur backdrop-brightness-75"
    >
      <div className="flex items-center space-x-12">
        <Image
          src="/up-logo.png"
          alt="Up&Up"
          width={50}
          height={50}
        />
        <motion.nav
          variants={navContainer}
          className="hidden md:flex md:space-x-8"
          initial="hidden"
          animate="visible"
        >
          {nav.map(item => (
            <motion.div key={item} role="link" aria-label={item} variants={navItem}>
              <Button variant="link" aria-label={item} className="px-1 text-md text-white">{item}</Button>
            </motion.div>
          ))}
        </motion.nav>
      </div>
      <Button variant="outline" className="hidden rounded-full border-primary text-primary md:flex">
        Entre Em Contato
        <ArrowRightIcon className="ml-2" />
      </Button>
      <Drawer>
        <DrawerTrigger className="p-2 md:hidden" aria-label="Menu">
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
              <Button
                size="icon"
                variant="ghost"
                aria-label="Instagram"
              >
                <Instagram />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Facebook"
              >
                <Facebook />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Twitter"
              >
                <Twitter />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </motion.header>
  )
}

export default Header
