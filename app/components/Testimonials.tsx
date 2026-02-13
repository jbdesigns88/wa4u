"use client";
import { useEffect, useState,useMemo } from "react"
import ClientsTestimonials from "@/types/clientTestimonials"
import styles from "./slidein.module.css";

interface TestimonialsProps{
    clients:ClientsTestimonials[]
}


const Testimonials = ( {clients}: TestimonialsProps) => {
    let [currentIndex,setCurrentIndex] = useState(0)
    const size = useMemo(() => clients.length - 1, [clients]);
    useEffect(() => {
      

        let interval = setInterval(() => {
            if(currentIndex >= size){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex + 1)
            }
        },(1000 * 60) / 2)

        return () => {
            clearInterval(interval)
        }
    }, [size,currentIndex])
    return (
        <div id="testimonials" className={""}>
               <h2  className="title text-4xl font-bold text-center text-gray-800 mb-6">
                       Testimonials
                    </h2>
                    

                    <div className="content-container">
            {



                clients.map((client: ClientsTestimonials, index:number) => (
                    <>
                    <figure key={index}className="content">
                        <div className={`pt-6 md:p-8 text-center md:text-left space-y-4 ${styles.slide_in_item} ${currentIndex === index ? styles.visible : styles.hidden } `}>
                            <blockquote>
                                <p className="text-lg font-medium">
                                 {`" ${client.statement} " `} 
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400 fullname">
                                    -{client.fullname}
                                </div>

                            </figcaption>
                        </div>

                        
                    </figure>

                </>

                ))



     
            }
       
                                 
                <div id="elispse-selector">
                {
    clients.map((client: ClientsTestimonials, index: number) => (
        <span 
            onClick={() => setCurrentIndex(index)} 
            className={`elipse ${index === currentIndex ? 'active' : 'inactive'}`}
            key={index} // Always add a key when mapping components
        ></span>
    ))
}
</div>
                 </div> 
           
            

         
            
        </div>
    )

}

export default Testimonials


// “Tailwind CSS is the only framework that I've seen scale
//                             on large teams. It’s easy to customize, adapts to any design,
//                             and the build size is tiny.”

