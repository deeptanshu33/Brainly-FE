import { Logo } from "../../icons/logo"
import { TwitterIcon } from "../../icons/twitterIcon"
import { YoutubeIcon } from "../../icons/youtubeIcon"
import { SidebarItem } from "./sidebarItem"

export function Sidebar(){
    return (
        <div className="h-screen w-72 border-r bg-white left-0 top-0 absolute pl-6">
            <div className="flex text-2xl pt-4 items-center">
                <div className="pr-2 text-purple-500">
                <Logo />
                </div>
                Brainly
            </div>
            <div className="pt-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon />}/>
                <SidebarItem text="YouTube" icon={<YoutubeIcon />}/>
            </div>
        </div>
    )
}