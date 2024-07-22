import {Button} from "@/components/ui/button.tsx";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Menu} from "lucide-react";
import {useState} from "react";


const navigation = [
    {
        name: 'Features',
        href: '#',
    },
    {
        name: 'Pricing',
        href: '#',
    },
    {
        name: 'About us',
        href: '#',
    }];


export const Header = () => {

    const [isOpen, setOpen] = useState(false);
    return (

        <header className={'flex items-center justify-between'}>
            <h1 className={'uppercase tracking-wider text-blue-600 '}>Routerra</h1>
            <div className={'hidden sm:block'}>
                <Navigation/>
            </div>
            <div className={'flex items-center gap-x-6'}>
                <Button variant={'outline'}
                        className={'uppercase font-normal text-xs border-blue-600 px-3 py-2'}
                        onClick={() => console.log("hello")}>Join
                    waitlist</Button>
                <div className={'sm:hidden'}>
                    <Sheet open={isOpen} onOpenChange={setOpen}>
                        <SheetTrigger><Menu/></SheetTrigger>
                        <SheetContent side={'left'} className={'px-2'}>
                            <nav className={'flex flex-col gap-y-3 pt-6'}>
                                {navigation.map((item) => {
                                    return <Button
                                        onClick={() => setOpen(false)}
                                        key={item.name}
                                        variant={"secondary"}>
                                        {item.name}
                                    </Button>
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export const Navigation = () => {
    return (<nav className={'flex gap-x-10'}>
        {navigation.map((item, index) => {
            return <a key={index} href={item.href} className={'text-sm text-gray-700 uppercase'}>{item.name}</a>
        })}
    </nav>);
}
