import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Menu as MenuIcon } from "lucide-react"

export function Menu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="link" className="px-0 w-8">
                    <MenuIcon className="!size-6" size={24} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4"/>
            </SheetContent>
        </Sheet>
    )
}
