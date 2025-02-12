
import demo from '@/assets/demo.svg'
import Image from 'next/image'


export const Demo = () => {
    return (
            <div className='max-w-2xl lg:max-w-8xl mx-auto px-4 py-12 lg:px-10 lg:py-20'>
                <div className='flex gap-x-3 items-start lg:items-center'>
                    <Image src={demo} alt="Demo icon" className='size-[36px] lg:size-[54px]' />
                    <h2 className='text-2xl font-bold text-slate-900 lg:text-[40px]'>Check out our platform overview</h2>
                </div>
                <div className='video-container border-4 mt-10 lg:border-[16px] lg:mt-12 border-slate-900 rounded-xl lg:rounded-[32px] overflow-hidden'>
                    <iframe className="video" width="100%" height="auto" src="https://www.youtube.com/embed/nRf5nvVVEZw?si=XBCFoCtVhLLKqTE_" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
    )
}
