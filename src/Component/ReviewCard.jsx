import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
     <div className="flex flex-1 flex-col justify-center items-center mt-5 min-w-[120px]  ">
       <img width={120} height={120} className="rounded-full flex-1 object-cover" src={imgURL} alt="revimg" />
       
       
       <p className="info-text max-w-sm text-center mt-4">{feedback}</p>
       <div className="flex gap-2 mt-4">
        <img src={star} alt="Rating" width={24} height={24} />
        <p>{rating}</p>
        
       </div>
       <h3 className="text-2xl font-bold  mt-2 ">{customerName}</h3>

     </div>
  )
}

export default ReviewCard