import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  title: string;
  tags: string[];
  className?: string;
}

function Work({ src, title, tags, className }: Props) {
  return (
    <div className={twMerge("md:flex md:space-x-10", className)}>
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
    </div>
  )
}

export default Work
