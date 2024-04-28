"use client"

import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import Image from 'next/image'

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />

      <section className="w-full h-[50vh] flex flex-col justify-end px-6 md:h-[90vh] md:px-[5%]">
        <h2 className="mb-6 md:text-xl md:w-[40%]">
          Criamos estratégias e produções de conteúdo para auxiliar você a desenvolver seu negócio de forma crescente e ter mais visibilidade
        </h2>
        <h1 className="text-5xl font-semibold leading-tight md:text-9xl md:leading-tight">
          <span className="text-primary">Up&Up</span> seu Marketing!
        </h1>
        <div className="flex items-center justify-between">
          <Button size="lg" className="rounded-full mt-8 mb-12 font-bold text-black text-md md:h-16 text-xl md:mb-[5%]">
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

      <section className="relative w-full h-[60vh]">
        <Image
          src="https://cdn.myportfolio.com/1695d55d-a36a-4c47-a274-d558dbbc0f39/005b04ac-5a5c-47b3-bb60-534a89880f6f_rwc_67x0x1298x1588x4096.jpg?h=560280d89efa1725c2ba0e0d1c74cd6d" alt="Team"
          className="object-cover"
          fill
          sizes="100vw"
        />
      </section>
    </main>
  );
}
