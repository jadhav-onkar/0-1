export function CreatTodo(){
    return <div>
        <input style={{
            padding: "10px",
            margin: "10px"
        }} type="text" placeholder="title" /> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" /> <br />
        <button style={{
            padding: 10,
            margin: 10
        }}>add todo</button><br />
    </div>
}