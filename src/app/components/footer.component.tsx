import logo from "@/assets/logo.svg"
import Image from "next/image"

import twitter from "@/assets/twitter.svg"
import youtube from "@/assets/youtube.svg"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="px-4 lg:px-10">
            <div className='border-t border-slate-200 py-8 flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:py-8'>
                <div>
                    <Image src={logo} alt="Routerra Logo" className="w-[176px]"/>
                    <p className="mt-6 text-slate-400 text-sm leading-normal lg:text-base">© 2025 Routerra. All right reserved.</p>
                    <p className="mt-2 text-slate-400 text-sm leading-normal lg:text-base">Icons made by  <Link href={'https://www.freepik.com/author/uicons/icons'}>UIcons</Link> and from <Link href="https://www.flaticon.com">www.flaticon.com</Link></p>
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="flex gap-x-4 lg:justify-end">
                        <Link href="https://x.com/Routerra">
                            <Image src={twitter} alt="Twitter" className="w-[24px] h-[24px]"/>
                        </Link>
                        <Link href="https://www.youtube.com/@RouterraApp">
                            <Image src={youtube} alt="Youtube" className="w-[24px] h-[24px]"/>
                        </Link>
                    </div>
                    <div className="flex gap-x-4">
                        <Link href="mailto:info@routerra.io" className="text-slate-500 font-medium">
                            info@routerra.io
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}