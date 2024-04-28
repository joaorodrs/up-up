import { twMerge } from "tailwind-merge";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function Service({ icon, title, description, className }: Props) {
  return (
    <div className={twMerge("bg-white p-10", className)}>
      <div className="bg-primary size-fit p-3">
        {icon}
      </div>
      <h1 className="text-xl font-semibold mt-3">{title}</h1>
      <p className="text-zinc-600 mt-4 text-lg">{description}</p>
    </div>
  )
}

export default Service
