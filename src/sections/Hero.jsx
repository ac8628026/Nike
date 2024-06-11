import Button from "../Component/Button"
import { arrowRight } from "../assets/icons"
import {statistics} from "../constants/index"
import {shoes} from '../constants/index'
import Cards from "../Component/Cards"
import { bigShoe1 } from "../assets/images"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)
  return (
<section id="home" className="w-full padding-x flex xl:flex-row flex-col justify-between min-h-screen  max-container">
    <div className="relative xl:w-2/5 flex flex-col  items-start w-full max-xl:padding-x pt-28 ">

      <p className="text-coral-red text-lg font-montserrat">Our Summer collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold" >
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
      </h1>
      <p className="text-lg text-slate-gray font-montserrat mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life .</p>
      <Button label=" Shop Now" iconUrl={arrowRight}/>

      <div className=" flex items-center justify-start gap-16 w-full mt-20 flex-wrap ">
        {statistics.map((stat)=>(
          <div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>

          </div>
        ))}
      </div>


    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
      <img width={610} height={500} className="object-contain relative z-10 " src={bigShoeImage} alt="shoe collection" />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]">
      {shoes.map((shoe)=>(
       <div key={shoe}>
        <Cards imgURL={shoe} changeBigShoeImage={(shoe)=>{ setbigShoeImage(shoe)}} bigShoeImg="bigShoeImg"/>
       </div>
      ))}
      
    </div>
    </div>
   
    
   </section>
  )
}

export default Hero