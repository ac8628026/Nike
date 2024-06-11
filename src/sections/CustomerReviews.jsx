import ReviewCard from "../Component/ReviewCard"
import {reviews} from "../constants/index"
const CustomerReviews = () => {
  return (
    <section id="customerreviews" className="max-container">
      <h3 className="text-4xl text-center font-bold font-montserrat ">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto max-w-lg text-center ">somthing spacial things about shoes quality somthing spacial things
          about shoes qualitysomthing spacial things about shoes qualitysomthing
          spacial things</p>
     
     <div className=" flex flex-1 flex-col md:flex-row gap-20 justify-evenly items-center ">
      {reviews.map((review)=>(
       <ReviewCard key={review.customerName} {...review} />
      ))
      }
     </div>

    </section>
  )
}

export default CustomerReviews