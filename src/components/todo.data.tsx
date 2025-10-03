interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[],
    owner?: string
}

// type TProps = {
//     todos: {
//         id: number,
//         title: string,
//         isComplete: boolean
//     }[],
//     owner: string
// }

const TodoData = (props: IProps) => {
    const { todos, owner = "Unknown" } = props
    return (
        <>
            <div>{owner}</div>
            <div>{todos.map((item) => {
                return (
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            })}</div>
        </>
    )
}

export default TodoData