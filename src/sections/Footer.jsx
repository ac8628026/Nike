import { socialMedia } from "../constants/index";
import { headerLogo } from "../assets/images";
const Footer = () => {
  return (
    <footer className="text-white flex flex-col lg:flex-row gap-10 items-start lg:items-center h-auto lg:h-10 p-5 lg:p-10">
  <div className="flex-1">
    <div className="flex gap-3">
      <a href="/">
        <img src={headerLogo} alt="logo" width={110} height={29} />
      </a>
    </div>
    <p className="text-lg mt-2 font-montserrat max-w-[450px]">
      can shoes ready for the new somthing like this ... can shoes ready for
      the new somthing like this ...{" "}
    </p>
    <div className="flex gap-4 mt-5">
      {socialMedia.map((item, index) => (
        <img
          className="bg-white rounded-full p-2"
          width={35}
          src={item.src}
          alt={item.alt}
          key={index}
        />
      ))}
    </div>
  </div>

  <div className="flex-1 flex flex-col md:flex-row gap-10 mt-10 lg:mt-0">
    <div className="flex-1">
      <h3 className="text-xl font-bold">Products</h3>
      <ul className="mt-3">
        <li>Air Force 1</li>
        <li>Air Max 1</li>
        <li>Air Jordan 1</li>
        <li>Air Force 2</li>
        <li>Nike Waffle Racer</li>
        <li>Nike Cortez</li>
      </ul>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold">Help</h3>
      <ul className="mt-3">
        <li>About us</li>
        <li>FAQs</li>
        <li>How it works</li>
        <li>Privacy policy</li>
        <li>Payment policy</li>
      </ul>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold">Get in touch</h3>
      <ul className="mt-3">
        <li>
          <a href="mailto:support@gmail.com">support@gmail.com</a>
        </li>
        <li>
          <a href="tel:+92554862354">+92554862354</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
