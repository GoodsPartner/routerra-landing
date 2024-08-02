import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export const Features = () => {
    return (
        <div className={'bg-purple-gradient-reverse m-0 p-0 py-16 sm:py-28'}>
            <section
                className={' container mx-auto flex flex-col '}>
                <div
                    className={'flex flex-col items-center'}>
                    <h2
                        className={'md:w-3/5 text-3xl sm:text-5xl text-center pb-6 text-primary-black font-medium'}>
                        Request the features which you need</h2>
                    <p className={' w-4/5 text-center text-base text-secondary-black md:text-xl'}>
                        Didn’t find what you need request a feature.
                        Waitlist is limited, we want to give attention to everyone. Don’t miss your opportunity to join while it open.
                    </p>
                </div>
                <div className={'mt-8 gap-3 flex flex-col justify-center sm:flex-row sm:mt-12'}>
                    <Input type="email" placeholder={'Email'}
                        className={'border border-stroke p-2 rounded-md sm:max-w-[372px] focus:outline-0'} />
                    <Button className={'bg-blue-600 text-white p-2  uppercase py-3 px-6 rounded-lg'}
                        style={{
                            background: 'linear-gradient(90deg, #3949ab 0%, #8145dc 100%)',
                        }}
                    >Join waitlist</Button>
                </div>
            </section>
        </div>
    )
}