export function Input({reference, placeholder}: {reference:any; placeholder: string}) {
    return(
        <div>
            <input ref={reference} type={"text"} placeholder = {placeholder} className="px-4 py-2 border-b rounded m-2" />
        </div>
    )
}