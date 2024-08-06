import hero from '@/assets/hero.png'
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Header } from './header.component';

export const Hero = () => {
    return (<section className={'bg-purple-gradient m-0 p-0 pb-16 sm:pb-28 '}>
        <div> <Header /> </div>
        <div className={' container mx-auto flex flex-col md:flex-row md:justify-between items-center '}>
            <div className={'md:order-2 max-h-[774px] flex-1'}>
                <img className={'w-full h-auto md:min-h-[460px]'} src={hero} alt="" />
            </div>
            <div className={'flex-1 sm:flex sm:flex-col sm:justify-center '}>
                <h2 className={'font-medium text-5xl leading-[110%] md:text-6xl'}>
                    {/*TODO: Border vs outline? */}
                    {/*TODO: Fix color */}
                    Route planner {' '}
                    <br className={'hidden sm:block'} />
                    accessible to
                    <div
                        className={' text-transparent border-2 p-1 pt-0.5 inline-block rounded-2xl border-purple-600/70 bg-clip-text '}
                        style={{
                            background: 'linear-gradient(90deg, #3949ab 0%, #8145dc 100%)',
                            WebkitBackgroundClip: 'text',
                        }}>
                        everyone</div>
                </h2>


                <p className={'text-lg mt-4 sm:mt-6 sm:text-2xl'}>Become early adopter for world-first affordable route
                    optimization service.</p>

                <div className={'mt-8 gap-3 flex flex-col sm:flex-row sm:mt-12'}>
                    <Input type="email" placeholder={'Email'}
                        className={'border border-gray-300 p-2 rounded-md sm:max-w-[372px] border-purple-600/70 focus:outline-0'} />
                    <Button className={'bg-blue-600 text-white p-2  uppercase py-3 px-6 rounded-lg'}
                        style={{
                            background: 'linear-gradient(90deg, #3949ab 0%, #8145dc 100%)',
                        }}
                    >Join waitlist</Button>
                </div>
            </div>
        </div>
    </section>)
}