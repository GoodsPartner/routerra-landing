import steps from '@/assets/steps.svg'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const stepsInfo = [
    {
        title: 'Add stops',
        description: 'using search, scan or upload',
        image: '/add-stops.png'
    },
    {
        title: 'Optimize route',
        description: 'to your needs, vehicle type or location',
        image: '/optimize-route.png'
    },
    {
        title: 'Export and drive',
        description: 'using your favorite GPS navigation',
        image: '/export-and-drive.png'
    }
]

export const Steps = () => {
    return (
        <div className='max-w-2xl px-4 pb-16 lg:px-10 lg:max-w-8xl mx-auto '>
            <div className='flex gap-x-3 items-start lg:items-center'>
                <Image src={steps} alt="Steps" className='size-6 lg:size-[54px]'/>
                <h2 className='text-2xl font-bold text-slate-900 lg:text-[40px]'>Optimize your route easily and quickly</h2>
            </div>
            <div className='flex flex-col gap-y-4 pt-10 pb-6 lg:flex-row lg:justify-between lg:gap-x-6 lg:pt-12 lg:pb-10'>
                {stepsInfo.map((step, index) => (
                    <div key={index} className='border border-slate-200 rounded-2xl lg:rounded-3xl'
                        style={{
                            boxShadow: '0 2px 8px 4px rgba(100, 116, 139, 0.04)'
                        }}>

                        <div className='bg-slate-50 p-6 lg:p-8 rounded-3xl'>
                            <img src={step.image} alt={step.title} className='rounded-lg lg:rounded-xl ' />
                        </div>
                        <div className='pt-3 pb-4 px-6  lg:p-8 lg:pt-6'>
                            <h3 className='text-2xl font-bold text-slate-900 leading-normal'>{step.title}</h3>
                            <p className='text-xl text-slate-500 leading-normal'>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center'>
                <Link href="https://app.routerra.io" className='flex-1 max-w-96 '>
                    <Button className="w-full">Get started for free</Button>
                </Link>
            </div>
        </div>
    )
}