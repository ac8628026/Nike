import { offer } from "../assets/images";
import Button from "../Component/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section
      id="specialoffer"
      className="w-full flex items-center flex-row max-xl:flex-col-reverse   mx-2  gap-10 max-container"
    >
      <div className="flex-1">
        <img src={offer} className="object-contain w-full" alt="shoe8" width={570} height={522} />
      </div>
      <div className="flex  flex-1 flex-col items-start justify-center  ">
        <h2 className="text-4xl font-bold font-palanquin capitalize ">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="text-slate-gray  mt-6 text-lg font-palanquin  ">
          somthing spacial things about shoes quality somthing spacial things
          about shoes qualitysomthing spacial things about shoes qualitysomthing
          spacial things about shoes qualitysomthing spacial things about shoes
          quality
        </p>
        <p className="text-slate-gray mt-6 font-palanquin text-lg  ">
        somthing spacial things about shoes quality somthing spacial things
          about shoes qualitysomthing spacial things about shoes qualitysomthing
          spacial things about shoes qualitysomthing spacial things about shoes
          quality
        </p>
        <div className="mt-11 ">
          <Button label="Shop now" iconUrl={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
