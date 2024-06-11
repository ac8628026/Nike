import {Hero,Footer,CustomerReviews,PopularProducts,Services,SpecialOffer,SuperQuality,Suscriber} from './sections/index'
import Nav from './Component/Nav';
const App = () =>(
  <main className="relative">
   < Nav/> 
     <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
     </section>
     <section className="padding">
    <PopularProducts/> 
     </section>
     <section className="padding">
    <SuperQuality/>
     </section>
     <section className="padding-x py-10">
    <Services/> 
     </section>
     <section className="padding">
    <SpecialOffer/> 
     </section>
     <section className=" bg-pale-blue padding">
    <CustomerReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
    <Suscriber/>
     </section>
     <section className="padding bg-black padding-x padding-t pb-8">
    <Footer/>
     </section>
  </main>
)

export default App;