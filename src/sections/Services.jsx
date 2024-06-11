import {services} from '../constants/index'
const Services = () => {
  return (
   <section id='services' className='flex  flex-wrap items-center justify-between gap-9'>
   {
    services.map((service)=>(
      <div className=' flex-1 sm:w-[350px] sm:min-w-[350px]  w-full px-10 py-16 shadow-2xl rounded-[20px] ' key={service.imgURL}>
        <img className='w-11 h-11 flex bg-coral-red rounded-full items-center justify-center' src={service.imgURL} alt="service" />
        <h3 className='text-3xl font-bold font-montserrat mt-5'>{service.label}</h3>
        <p className='font-montserrat break-words text-lg text-slate-gray mt-3'>{service.subtext}</p>
      </div>
    ))
   }
    </section> 


  )
}

export default Services