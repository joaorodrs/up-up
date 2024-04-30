import { HTMLMotionProps, motion } from 'framer-motion'

type Props = {
  children: string
} & HTMLMotionProps<'span'>

function TypingAnimate({ children: text, ...rest }: Props) {
  if (!text) return null

  const textArray = text.split("")

  return (
    <div>
      {textArray.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: index / 5,
          }}
          {...rest}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

export default TypingAnimate
