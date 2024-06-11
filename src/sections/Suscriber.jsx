import Button from "../Component/Button"
const Suscriber = () => {
  return (
   <section className=" flex-1 max-container justify-between items-center max-lg:flex-col gap-10 ">
    <h3 className="text-4xl font-bold font-palanquin lg:max-w-[70%] ">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
    
    <div className=" mt-4 lg:max-w-[50%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border rounded-full sm:border-slate-gray ">
      <input type="text" placeholder="subscribe@nike.com" className="input" />
      <div className="flex max-sm:justify-end item-center max-sm:w-full">
        <Button label="Sign Up"/>
      </div>
    </div>

   </section>
  )
}

export default Suscriber