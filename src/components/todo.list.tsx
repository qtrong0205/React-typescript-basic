import TodoData from "./todo.data"
import TodoInput from "./todo.input"

const TodoList = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]


    return (
        <div style={{
            width: "600px", margin: "50px auto",
            border: "1px solid black", padding: "15px",
            borderRadius: "10px"
        }}>
            <div>My todo list:</div>
            <hr />
            <TodoInput
                name="your todo"
            />
            <TodoData
                todos={todos}
            // owner={"Trọng"}
            />
        </div>
    )
}

export default TodoList