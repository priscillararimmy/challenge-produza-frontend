'use client'
import { Template } from '@/components'

export default function HomePage() {
  return (
    <Template>
      <section className="flex items-center justify-center h-[calc(100vh-3.2rem)] space-x-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-tentpole-desktop_3840f3c6.jpeg?region=0,0,1600,600')" }}>
        <button className="w-48 md:w-64 lg:w-80 h-12 md:h-14 lg:h-16 bg-white text-black text-sm md:text-base lg:text-lg rounded transition-transform transform hover:scale-105 hover:bg-orange-600">
          Starships
        </button>
        <button className="w-48 md:w-64 lg:w-80 h-12 md:h-14 lg:h-16 bg-white text-black text-sm md:text-base lg:text-lg rounded transition-transform transform hover:scale-105 hover:bg-orange-600">
          Pilots
        </button>
      </section>
    </Template>  
  );
}
