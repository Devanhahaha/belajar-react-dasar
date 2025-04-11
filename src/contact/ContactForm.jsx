import { useImmer } from "use-immer";

const initialData = {
    name: "",
    message: ""
};

export default function ContactForm() {
    const [ draft, setContact ] = useImmer(initialData);

    function handleNameChange(e) {
        setContact(draft => {
            draft.name = e.target.value;
        })
    }

    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value;
        })
    }
    return (
        <div>
            <h1>Ini Halaman Contact</h1>
            <form>
                <input type="text" placeholder="name" value={draft.name} onChange={handleNameChange}/>
                <br />
                <input type="text" placeholder="message" value={draft.message} onChange={handleMessageChange}/>
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {draft.name}</p>
            <p>Message: {draft.message}</p>
        </div>
    )
}