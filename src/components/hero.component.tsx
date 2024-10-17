import hero_button from '@/assets/hero-action-button.svg';
import hero from '@/assets/hero-desktop.png';

export const Hero = () => {
    return (<section className={'px-3 pb-3'}>
        <div
            className={'flex flex-col bg-slate-900 rounded-[56px] md:flex-row min-h-[calc(100vh-84px)] md:min-h-min md:h-[calc(100vh-124px)] overflow-y-scroll'}>

            <div className={'flex flex-col ~px-6/20 ~py-8/32 md:w-[45%]'}>
                <h1 className={'text-white leading-tight font-bold ~text-4xl/7xl'}>Route <span
                    className={'text-[#C5ABFD]'}>Planning</span> <br/>
                    made <span className={'text-[#FCBCAA]'}>Simple</span>
                </h1>

                <img className={'w-full h-full max-w-96 object-contain py-8 -px-4 md:hidden'} src={hero} alt="preview"/>

                <p className={'text-white ~text-lg/3xl ~mt-4/14'}>Easily optimize your route on any device
                    with our simple yet effective tool.</p>
                <a href="https://app.routerra.io"
                   className={'rounded-[44px] flex justify-between bg-slate-600 ~pl-4/8 w-full sm:~w-52/80 items-center text-white ~text-lg/3xl ~mt-12/32'}>
                    Try It Free
                    <div className={'~size-14/20'}>
                        <img src={hero_button} className={'w-full h-auto'}/>
                    </div>
                </a>

            </div>


            <div className={'hidden md:block md:w-[55%] ~py-2/6 ~pr-2/6'}>
                <img className={'w-full h-full  object-contain'} src={hero} alt="preview"/>
            </div>
        </div>
    </section>)
}