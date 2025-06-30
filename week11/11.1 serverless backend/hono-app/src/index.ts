import { Hono, Next, Context } from 'hono'

const app = new Hono()


async function authMiddleware(c:Context, next:Next) {
    if(c.req.header("Authorization")){
      await next()
    }
    else{
      return c.text("auth fails")
    }
}

app.post('/user',authMiddleware ,async(c)=>{
   const body = await c.req.json();
   console.log(body.email)
   console.log(c.req.header("Authorization"))
   console.log(c.req.query("a"))
   return c.text("post request executed")
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
