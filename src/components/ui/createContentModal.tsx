import axios from "axios"
import { BACKEND_URL } from "../../config"
import { CrossIcon } from "../../icons/crossIcon"
import { Button } from "./button"
import { Input } from "./input"
import { useRef, useState } from "react"

type ContentModalType = {
    open?: boolean
    onClose?: () => void
}

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose} : ContentModalType){
    //todo - should close when clicked outside the modal
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.YouTube)

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            type,
            title
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose?.();
    }

    return(
        <div>
            {open && <div className="w-screen h-screen fixed top-0 left-0
             flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-screen bg-slate-900 opacity-55"></div>
                <span className="bg-white relative opacity-100 p-4 rounded">
                    <div onClick = {onClose} className="flex justify-end cursor-pointer">
                        <CrossIcon/>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder={"Title"}/>
                        <Input reference={linkRef} placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-around p-4 gap-1">
                        <Button text={"YouTube"} size="md" variant={type===ContentType.YouTube ? "primary" : "secondary"}
                        onClick={()=>{
                            setType(ContentType.YouTube)
                        }}></Button>

                        <Button text="Twitter" size="md" variant={type===ContentType.Twitter ? "primary" : "secondary"}
                        onClick={()=>{
                            setType(ContentType.Twitter)
                        }}></Button>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text="Submit" size="md"/>
                    </div>
                </span>
            </div>}
        </div>
    )
}



