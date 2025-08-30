
import { createClient } from "redis";

const client = createClient()

async function worker() {
    await client.connect()
    while(1){
        try{
            let res = await client.BRPOP("problem", 0)
            console.log(JSON.parse(res.element))
        }
        catch(e){
            console.log(e)
        }
    }
}

worker()