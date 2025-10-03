interface IProps {
    name?: string
}

const TodoInput = (props: IProps) => {
    const { name = "Pleade type your todo" } = props
    return (
        <div style={{ display: "flex", gap: "30px" }}>
            <input value={name} type="text" />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput