import { getServerSession } from "next-auth"
import { Provider } from "../lib/provider"


export default async function(){
    const session =await getServerSession(Provider)
    return <div>
        {JSON.stringify(session)}
    </div>
}