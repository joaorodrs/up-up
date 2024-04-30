import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion'

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function Service({ icon, title, description, className }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.3, stiffness: 50 }}
      className={twMerge("bg-white p-10", className)}
    >
      <div className="bg-primary size-fit p-3">
        {icon}
      </div>
      <h1 className="text-xl font-semibold mt-3">{title}</h1>
      <p className="text-zinc-600 mt-4 text-lg">{description}</p>
    </motion.div>
  )
}

export default Service
