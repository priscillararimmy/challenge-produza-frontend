'use client'
import { Header, Footer, ImageCard } from '@/components'
import { useState, useEffect } from 'react'
import { Pilot } from '@/resources/pilot/pilot.resource';
import { usePilotService } from '@/resources/pilot/pilot.service';

export default function PilotePage() {
  const useService = usePilotService();
  const [pilots, setPilots] = useState<Pilot[]>([]);

  useEffect(() => {
    async function fetchPilots() {
      const result = await useService.search();
      setPilots(result);
      console.log(result);
      console.table(result);
    }
    fetchPilots();
  }, []); 

  function renderPilotCard(pilot: Pilot) {
    return (
      <ImageCard 
        name={pilot.name} 
        imageUrl={pilot.imageUrl} 
        description={pilot.description} 
      />
    );
  }

  function renderPilotCards() {
    return pilots.map(renderPilotCard);
  }

  return (
    <>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Header />
      <section className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-center text-2xl font-bold my-20">Pilots</h1>
      </section>
      {/* <section className="flex flex-col items-center justify-center my-20">
        <div>
          <h1 className='bg-white text-black'>Pilots</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Add new</button> 
        </div>
      </section> */}
      <section className="grid grid-cols-4 gap-8">
        { renderPilotCards() }
      </section>
    </div>
    <Footer />
    </>
  );
}
