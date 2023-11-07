import React from 'react'

//imports
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

//import pics

import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpg'
import car4 from '../images/car4.jpg'
import car5 from '../images/car5.jpg'


const Welcome = () => {
  return (
    <>
        <div className='mb-4'>
            <Navigation />
        </div>
        <div className='px-5 py-3 mx-5 rounded-md '>
            <div className='bg-slate-200 px-3 py-3'>
                <section className='lg:flex'>
                    <img 
                        src={car4}
                        alt='car3'
                        className='w-1/3 cover rounded-md'
                    />
                    <div className='px-6'>
                        <h1 className='py-3 font-bold text-2xl'>Fast and Furius</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    

                </section>
            </div>

            <div className='bg-slate-200  mt-3 px-3 py-3'>
                <section className='lg:flex'>
                
                    <div className='px-6'>
                        <h1 className='py-3 font-bold text-2xl'>Super speed Cars</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    <img 
                        src={car2}
                        alt='car3'
                        className='w-1/3 cover rounded-md'
                    />

                    

                </section>
            </div>
            <div className='bg-slate-200  mt-3 px-3 py-3'>
                <section className='lg:flex'>
                
                    <img 
                        src={car1}
                        alt='car3'
                        className='w-3/5 cover rounded-md'
                    />
                    <div className='px-6'>
                        <h1 className='py-3 font-bold text-2xl'>Ultra Promax</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>


                    

                </section>
            </div>

            

        </div>

        <div className='mt-3'>
            <Footer />
        </div>
    
    </>
  )
}

export default Welcome
