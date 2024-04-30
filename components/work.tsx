import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion'

type Props = {
  src: string;
  title: string;
  tags: string[];
  className?: string;
}

function Work({ src, title, tags, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      className={twMerge("md:flex md:space-x-10", className)}
    >
      <div className="relative w-full h-[300px] md:w-[40%]">
        <Image src={src} alt={src} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mt-6">{title}</h1>
        <div className="flex items-center gap-4 flex-wrap mt-4">
          {tags.map(item => (
            <div key={item} className="border border-black px-4 py-2 rounded-full font-semibold">
              {item}
            </div>
          ))}
        </div>
        <Button variant="link" className="px-1 text-lg mt-6 text-black">
          Mais detalhes
          <ArrowRightIcon className="ml-2" />
        </Button>
      </div>
    </motion.div>
  )
}

export default Work
