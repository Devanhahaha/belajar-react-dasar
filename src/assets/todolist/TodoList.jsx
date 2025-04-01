import Todo from "./Todo";
export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Belajar HTML",
            isCompleted: true,
        },
        {
            id: 1,
            text: "Belajar CSS",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Belajar JavaScript",
            isCompleted: true,
        },
        {   id: 3,
            text: "Belajar ReactJS",
            isCompleted: false,
        }
    ]

    const todos = data.map((todo) => {
        return <Todo {...todo} />
    });

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))};
        </ul>
    )
}