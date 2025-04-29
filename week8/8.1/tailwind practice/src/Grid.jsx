
export function Grid(){
    return(
        <>
        <div className="grid grid-cols-3">
            <div className="bg-red-500 col-span-3">hi there</div>
            <div className="bg-green-500 col-span-2">hi there</div>
            <div className="bg-yellow-500">hi there</div>
            <div className="bg-cyan-500">hi there</div>
            <div className="bg-blue-500">hi there</div>
            <div className="bg-green-500">hi there</div>
            <div className="bg-red-500">hi there</div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex">
            <div className="bg-yellow-500 w-[40%]">hi there</div>
            <div className="bg-cyan-500 w-[40%]">hi there</div>
            <div className="bg-red-500 w-[20%]">hi there</div>
        </div>
        </>
    )
}