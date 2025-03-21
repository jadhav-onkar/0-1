export function CreatTodo({ todos, title, description, completed, setTitle, setDescription, setCompleted }) {
    return (
        <div>
            <input
                style={{ padding: "10px", margin: "10px" }}
                type="text"
                placeholder="title"
                onChange={(e) => {setTitle(e.target.value)
                }}
            /> <br />

            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="description"
                onChange={(e) => {setDescription(e.target.value)
                }}
            /> <br />

            <button
                style={{ padding: 10, margin: 10 }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description
                        })
                    }).then(res => {
                        res.json();
                    })
                      .then(data => {
                          alert("Todo created");
                      })
                }}
            >
                add todo
            </button><br />
        </div>
    );
}
