"use client"

import { ArrowDownIcon, ArrowRightIcon, CodeXmlIcon, PenToolIcon, ScreenShareIcon } from "lucide-react";
import Image from 'next/image'

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Service from "@/components/service";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />

      <section className="w-full h-[50vh] flex flex-col justify-end px-6 md:h-[90vh] md:px-[5%]">
        <h2 className="mb-6 text-zinc-300 md:text-2xl md:w-[50%]">
          Nós somos especialistas em produção audiovisual
        </h2>
        <h1 className="text-5xl font-semibold leading-tight md:text-9xl md:leading-tight 2xl:w-[50%]">
          <span className="text-primary">Up&Up</span> seu Marketing!
        </h1>
        <div className="flex items-center justify-between">
          <Button size="lg" className="rounded-full mt-8 mb-12 font-bold text-black text-md md:h-16 md:text-xl md:mb-[5%]">
            Nos Contate Agora
            <ArrowRightIcon className="ml-4" />
          </Button>
          <div className="hidden items-center space-x-4 md:flex">
            <span className="text-lg font-semibold">Descubra mais</span>
            <div className="flex items-center justify-center border border-white p-2 rounded-full h-16">
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[60vh] md:h-screen">
        <Image
          src="https://cdn.myportfolio.com/1695d55d-a36a-4c47-a274-d558dbbc0f39/005b04ac-5a5c-47b3-bb60-534a89880f6f_rwc_67x0x1298x1588x4096.jpg?h=560280d89efa1725c2ba0e0d1c74cd6d" alt="Team"
          className="object-cover"
          fill
          sizes="100vw"
        />
      </section>

      <section className="w-full px-6 py-10 bg-gray-100 text-black md:p-[5%]">
        <h1 className="text-4xl font-bold md:text-7xl">Nosso Serviço</h1>
        <h2 className="text-zinc-500 mt-6 mb-10 md:hidden">
          Somos uma agência de marketing com o propósito de viabilizar a criação de autoridade nas redes sociais
        </h2>

        <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:grid-rows-6 md:space-y-0 md:gap-8 md:mt-6">
          <h2 className="hidden text-zinc-500 text-lg mb-10 row-span-1 md:flex">
            Somos uma agência de marketing com o propósito de viabilizar a criação de autoridade nas redes sociais
          </h2>
          <Service
            icon={<ScreenShareIcon />}
            title="Marketing Digital"
            description="Want to increase your income through your online sales? Leave it to our team and we will increase the value of selling your product online"
            className="md:row-span-2"
          />
          <Service
            icon={<PenToolIcon />}
            title="Branding"
            description="If you have a problem with the logo, and some other attributes displayed on your product, please submit it to us, we will update it to make it better"
            className="md:row-span-2"
          />
          <Service
            icon={<CodeXmlIcon />}
            title="Web Development"
            description="We provide services for website design using some fo the latest frameworks such as ReactJS, Node. We will give our best talent to build your website"
            className="md:row-span-2"
          />

          <Button size="lg" className="rounded-full mt-8 mb-12 font-bold text-black text-lg h-16">
            Nos Contate Agora
            <ArrowRightIcon className="ml-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
