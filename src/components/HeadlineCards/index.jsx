const HeadlineCards = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Card*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">[Nome]</p>
          <p className="px-2">Até 26/08</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça Agora</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card" />
      </div>

        {/*Card*/}
        <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">[Nome]</p>
          <p className="px-2">Até 19/08</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça Agora</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card" />
      </div>

        {/*Card*/}
        <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">[Nome]</p>
          <p className="px-2">Até 15/08</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça Agora</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card" />
      </div>

    </div>
  )
}

export default HeadlineCards