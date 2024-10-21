import hero_button from '@/assets/hero-action-button.svg';
import hero from '@/assets/hero-desktop.png';
import {useTranslation} from 'react-i18next';
import {Button} from "@/components/ui/button.tsx";

import {Youtube} from "lucide-react";

export const Hero = () => {
    const {t} = useTranslation();

    return (
        <section className={'px-3 pb-3'}>
            <div
                className={
                    'flex flex-col bg-slate-900 rounded-[56px] md:flex-row min-h-[calc(100vh-84px)] md:min-h-min md:h-[calc(100vh-124px)] overflow-y-scroll'
                }
            >
                <div className={'flex flex-col ~px-6/20 ~py-8/32 md:w-[45%]'}>
                    <h1 className={'text-white leading-tight font-bold ~text-4xl/7xl'}>
                        {t('route')} <span className={'text-[#C5ABFD]'}>{t('planning')}</span> <br/>
                        {t('made')} <span className={'text-[#FCBCAA]'}>{t('simple')}</span>
                    </h1>

                    <img
                        className={'w-full h-full max-w-96 object-contain py-8 -px-4 md:hidden'}
                        src={hero}
                        alt="preview"
                    />

                    <p className={'text-white ~text-lg/3xl ~mt-4/14'}>{t('easy-optimize')}</p>
                    <div className={
                        '~mt-12/24 flex flex-col gap-4 '
                    }>
                        <a
                            href="https://app.routerra.io"
                            className={
                                'rounded-[44px] hover:bg-slate-600/90 flex justify-between bg-slate-600 ~pl-4/8 ~min-h-16/20 w-full ~pr-1/2 sm:~w-52/80 items-center text-white ~text-2xl/3xl'
                            }
                        >
                            {t('try-it')}

                            <img src={hero_button} className={'~size-12/16 '}/>

                        </a>
                        <a href="http://youtube.com" target={'_blank'}>
                            <Button
                                className={'rounded-[44px] sm:~w-52/80 ~min-h-16/20 ~text-2xl/3xl gap-x-4 justify-start font-regular ~pr-1/2 '}
                                variant={'destructive'}>
                                <Youtube size={56}/> {t('watch-demo')} </Button>
                        </a>

                    </div>
                </div>

                <div className={'hidden md:block md:w-[55%] ~py-2/6 ~pr-2/6'}>
                    <img className={'w-full h-full  object-contain'} src={hero} alt="preview"/>
                </div>
            </div>
        </section>
    );
};
