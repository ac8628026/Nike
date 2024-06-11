import { shoe8 } from "../assets/images";
import Button from "../Component/Button";
const SuperQuality = () => {
  return (
    <section id="about-us" className="w-full flex items-center justify-between mx-2  max-lg:flex-col gap-10 max-container">
      <div className="flex  flex-1 flex-col  ">
        <h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg "> We Provide You <span className="text-coral-red"> Super{" "}</span>
      
           <span className="text-coral-red">Quality</span> {" "}Shoes
        </h2>
        <p className="text-slate-gray text-lg mt-4 font-palanquin lg:max-w-lg  ">
          somthing spacial things about shoes quality somthing spacial things
          about shoes qualitysomthing spacial things about shoes qualitysomthing
          spacial things about shoes qualitysomthing spacial things about shoes
          quality
        </p>
        <p className="text-slate-gray mt-6 font-palanquin text-lg  lg:max-w-lg">
          our dedication to detials and excellence ensures your 
          satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>

      </div>
      <div className="flex-1 justify-center items-center ">
        <img src={shoe8} className="" alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
