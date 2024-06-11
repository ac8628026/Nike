
const Button = ({label,iconUrl}) => {
  return (
    <button className="flex  items-center justify-center gap-2 px-7 py-4 font-montserrat text-lg leading-none  bg-coral-red rounded-full text-white border-coral-red">
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow" width={20} height={20} />}
    </button>
  )
}

export default Button