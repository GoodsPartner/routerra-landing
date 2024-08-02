import time from '@/assets/time.png'
import stars from '@/assets/stars.png'


export const Benefits = () => {
    return (
        <div className={'bg-purple-gradient-reverse m-0 p-0 py-16 sm:py-28'}>
            <section className={'container mx-auto flex flex-col'}>
                <div className={'flex flex-col items-center'}>
                    <h2 className={'md:w-3/5 text-3xl sm:text-5xl text-center pb-6 text-primary-black font-medium'}>
                        Routes planing shouldn’t be painful
                    </h2>
                    <p className={' w-3/5 text-center text-base text-secondary-black md:text-xl'}>
                        Route calculation could be painful. We’re all unique. Our goals are different. But all demands should be satisfied
                    </p>
                </div>
                <div className={'grid rid-cols-1 gap-4 mt-20 md:grid-cols-3'}>
                    <div className={'rounded-2xl border border-stroke p-6'}>
                        <h3 className={'text-2xl text-primary-black mb-6'}>Driver</h3>
                        <ul
                            className={'text-lg md:text-xl'}>
                            <li className={'mb-3'}>Capacity</li>
                            <li className={'mb-3'}>Cost and fuel consumption</li>
                            <li className={'mb-3'}>Working schedule</li>
                            <li>Car allowed access zones</li>
                        </ul>
                    </div>

                    <div className={'rounded-2xl border border-stroke p-6 md:col-span-2 col-span-1 '}>
                        <h3 className={'text-2xl text-primary-black mb-6'}>Client</h3>
                        <div className={'flex justify-between flex-col md:flex-row'}>
                            <ul
                                className={'text-lg md:text-xl'}>
                                <li className={'mb-3'}>Arrival time-window</li>
                                <li className={'mb-3'}>Service time</li>
                                <li className={'mb-3'}>Pre-assigned cars</li>
                                <li>Specific order types</li>
                            </ul>
                            <img className={'w-52 mt-4 md:mt-0'} src={time} alt="" />
                        </div>
                    </div>

                    <div className={'rounded-2xl border border-stroke p-6 md:col-span-2 col-span-1'}>
                        <h3 className={'text-2xl text-primary-black mb-6'}>Business</h3>
                        <div className={'flex justify-between flex-col md:flex-row'}>
                            <ul
                                className={'text-lg md:text-xl'}>
                                <li className={'mb-3'}>Cost effectiveness</li>
                                <li className={'mb-3'}>Analytics</li>
                                <li className={'mb-3'}>Automation</li>
                                <li>Customer satisfaction</li>
                            </ul>
                            <img className={'w-72 mt-4 md:mt-0'} src={stars} alt="" />
                        </div>
                    </div>

                    <div className={'rounded-2xl border border-stroke p-6'}>
                        <h3 className={'text-2xl text-primary-black mb-6'}>Logistician</h3>
                        <ul
                            className={'text-lg md:text-xl'}>
                            <li className={'mb-3'}>Route planning efficiency</li>
                            <li className={'mb-3'}>Load balancing</li>
                            <li className={'mb-3'}>Time saving</li>
                            <li>Coordination and updates</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

