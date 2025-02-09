
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import testimonials from '@/assets/testimonials.svg'

const testimonialsInfo = [
    {
        name: 'Shayra Khatun',
        company: 'Delivery Courier, DPD',
        quote: 'What an amazing app! It helped me tremendously with doing multiple deliveries. Very easy to use, I couldn’t be happier.',
    },
    {
        name: 'Joseph Rodriguez',
        company: 'Courier driver',
        quote: 'I was simply amazed at how the interface worked with Google Maps. It optimized my route and saved over an hour of my time. Two thumbs up!',
    },
    {
        name: 'Arlene McCoy',
        company: 'Delivery Courier, DPD',
        quote: 'Circuit Route Planner makes deliveries so easy and efficient, less stress, safer driving, and no more u-turns! It\'s a joy to use.',
    }
]
export const Testimonials = () => {
    return (
        <div className='px-4 py-12 bg-slate-50 lg:px-10 lg:pt-24 lg:pb-32'>
            <div className='max-w-2xl lg:max-w-8xl mx-auto '>
                <div className='flex gap-x-3 items-center lg:items-center'>
                    <Image src={testimonials} alt="Testimonials icon" className='size-[36px] lg:size-[54px]' />
                    <h2 className='text-2xl font-bold text-slate-900 lg:text-[40px]'>What our users say</h2>
                </div>
                <div className='flex flex-col gap-y-6 pt-10 lg:flex-row lg:justify-between lg:gap-x-6 lg:pt-12'>
                    {testimonialsInfo.map((testimonial, index) => (
                        <div key={index} className='border border-slate-200 bg-white p-6 lg:p-10 rounded-lg lg:rounded-2xl'>
                            <div className='text-sm font-bold text-slate-900'>{testimonial.name}</div>
                            <div className='text-sm text-slate-500'>{testimonial.company}</div>
                            <div className='text-base lg:text-xl mt-4 text-slate-900'>“{testimonial.quote}”</div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}