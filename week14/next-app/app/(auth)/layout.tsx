
export default function({children}:{
    children:React.ReactNode
}){
    return <div>
        <div className="border-b border-slate-400 p-3 text-center">20% discount for next 15 days</div>
        {children}
    </div>
}