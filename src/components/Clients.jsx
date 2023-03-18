import { clients } from "../constants"

const Clients = () => (
  <section id='clients' className="flex sm:justify-between justify-center items-center flex-wrap py-[76px]">
    {
      clients.map((client) => (
        <img 
          src={client.logo}
          alt='client'
          key={client.id}
          className='w-[192px] h-[60px] m-6'
        />
      ))
    }
  </section>
)


export default Clients