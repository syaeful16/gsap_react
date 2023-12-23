import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import journey1 from "../assets/journey_image/journey-1.jpg"
import journey2 from "../assets/journey_image/journey-2.jpg"

gsap.registerPlugin(ScrollTrigger)

function Journey() {
    const details = gsap.utils.toArray("#text-content:not(:first-child)")
    const photos = gsap.utils.toArray("#photo:not(:first-child)")
    const allPhoto = gsap.utils.toArray('#photo')

    useEffect(() => {
        gsap.set(photos, {yPercent: 101}) 

        gsap.fromTo('#journey-photo', {xPercent: -100}, {xPercent: 100, duration: 3, scrollTrigger: '#journey-details'})

        ScrollTrigger.create({
            trigger: '#journey',
            start: 'top top',
            end: 'bottom bottom',
            pin: '#journey-photo'
        })

        details.forEach((detail, index) => {
            let headline = detail.querySelector('h1')
            let animation = gsap.timeline()
                .to(photos[index], {yPercent:0})
                .set(allPhoto[index], {autoAlpha:0})

            ScrollTrigger.create({
                trigger: headline,
                start: 'top 80%',
                end: 'top 50%',
                animation: animation,
                scrub: 3
            })
        })
    }, [])

    return (
        <>
            <div className="h-screen bg-[#030303]"></div>
            <section id="journey" className="bg-[#030303]">
                <div id="journey-details" className="h-full grid lg:grid-cols-2 ">
                    <div id="journey-photo" className="h-screen flex flex-col justify-center items-center">
                        <div id="photos" className="w-full h-full relative overflow-hidden">
                            <div id="photo" className="absolute w-full h-full">
                                <img src={journey1} alt="Journey 1" srcset="" className="w-full h-full object-cover brightness-75"/>
                            </div>
                            <div id="photo" className="absolute w-full h-full">
                                <img src={journey2} alt="Journey 1" srcset="" className="w-full h-full object-cover brightness-75"/>
                            </div>
                            <div id="photo" className="absolute w-full h-full">
                                <img src={journey1} alt="Journey 1" srcset="" className="w-full h-full object-cover brightness-75"/>
                            </div>
                            <div id="photo" className="absolute w-full h-full bg-journey-1 bg-cover bg-center">
                                {/* <img src={journey2} alt="Journey 1" srcset="" className="w-full h-full object-cover brightness-75"/> */}
                            </div>
                        </div>
                    </div>
                    <div id="journey-text" className="px-40 text-white">
                        <div id="text-content" className="flex flex-col min-h-screen justify-center gap-4">
                            <h1 className="font-bold text-[4rem]">Text 1</h1>
                            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div id="text-content" className="flex flex-col min-h-screen justify-center gap-4">
                            <h1 className="font-bold text-4xl">Text 2</h1>
                            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div id="text-content" className="flex flex-col min-h-screen justify-center gap-4">
                            <h1 className="font-bold text-4xl">Text 3</h1>
                            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div id="text-content" className="flex flex-col min-h-screen justify-center gap-4">
                            <h1 className="font-bold text-4xl">Text 4</h1>
                            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-screen bg-[#030303]"></div>
        </>
    )
}

export default Journey