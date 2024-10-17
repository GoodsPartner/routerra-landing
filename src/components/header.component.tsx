import { Mail} from "lucide-react";
import {Logo} from "@/components/logo.component.tsx";


export const Header = () => {
    return (

        <header className={'flex items-center justify-between p-4 md:py-8 md:px-10'}>
            <Logo/>

            <div className={'flex items-center gap-x-6'}>
                <a href="mailto:info@routerra.io"
                    className={'text-slate-900 border rounded-full border-slate-900  p-[11px]'}>
                    <Mail className={'size-4 md:size-6'}/>
                </a>
                {/*<a href="#"*/}
                {/*   className={'text-slate-900 border rounded-full border-slate-900 p-[11px]'}>*/}
                {/*    <Globe className={'size-4 md:size-6'}/>*/}
                {/*</a>*/}
                <a href="https://app.routerra.io"
                   className={'hidden bg-slate-900 text-white rounded-3xl px-8 py-3 font-semibold md:block'}>Sign
                    in</a>
            </div>
        </header>
    )
}
