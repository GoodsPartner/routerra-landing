
import Image from 'next/image'

import testimonials from '@/assets/testimonials.svg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const testimonialsInfo = [
    {
        name: 'Nathan Loomis',
        company: 'Thomas Trash Service',
        quote: 'Routerra has been extremely helpful for us! The communication back and forth allowing the customization that optimizes our business has been extremely beneficial! Team have been very responsive, thorough, and understanding of our requests!',
    },
    {
        name: 'Chris Pappas',
        company: 'EXIT REALTY PEI',
        quote: 'I put up Real Estate Signs for an entire province in Canada. Routerra allowed me to input, organize and efficiently complete a two week project in just three days.',
    },
    {
        name: 'Lauren Hartman',
        company: 'Still Water Camps',
        quote: 'We were able to utilize Routerra with all needed assistance which greatly helped us complete the routes we needed to do!',
    },
    {
        name: 'Shaswata Bhattacharya',
        company: 'FedEx Driver',
        quote: 'The product really helped me through the my FedEx job, so thank you and your team, for the amazing product.',
    },
    {
        name: 'Jane Coppinger',
        company: 'ReeceNichols',
        quote: 'I truly appreciate everything you did for me!  You made my life so much easier and I will use your service each year when I deliver my pies! Thank you',
    }
];

export const Testimonials = () => {
    return (
        <div className='px-4 py-12 bg-slate-50 lg:px-10 lg:pt-24 lg:pb-32'>
            <div className='max-w-2xl lg:max-w-8xl mx-auto '>
                <div className='flex gap-x-3 items-center lg:items-center'>
                    <Image src={testimonials} alt="Testimonials icon" className='size-[36px] lg:size-[54px]' />
                    <h2 className='text-2xl font-bold text-slate-900 lg:text-[40px]'>What our users say</h2>
                </div>
                <div className=' pt-10 px-10 lg:pt-12'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonialsInfo.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                                    <div key={index} className='border border-slate-200 bg-white p-6 lg:p-10 rounded-lg h-full lg:rounded-2xl'>
                                        <div className='text-sm font-bold text-slate-900'>{testimonial.name}</div>
                                        <div className='text-sm text-slate-500'>{testimonial.company}</div>
                                        <div className='text-base lg:text-xl mt-4 text-slate-900'>“{testimonial.quote}”</div>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>



                </div>
            </div>
        </div>
    )
}