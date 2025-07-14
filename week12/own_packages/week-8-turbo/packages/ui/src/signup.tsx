import './App.css'

export const Signup = ()=>{
    return(
    <div style={{backgroundColor:'black',color:"white", display:'flex',flexDirection:'column', width:'50vw'}}>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='password' />
        <button>Submit</button>
    </div>
    )
}