import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  quote: string;
  src: string;
  name: string;
  title: string;
}

function Testimonial({ quote, src, name, title }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.3, stiffness: 50 }}
      className="bg-white px-4 py-10 text-black md:px-10"
    >
      <p className="text-xl">{quote}</p>
      <div className="mt-6 flex items-center space-x-4">
        <Image
          src={src}
          alt="Avatar"
          width={64}
          height={64}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-sm text-zinc-600">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonial
