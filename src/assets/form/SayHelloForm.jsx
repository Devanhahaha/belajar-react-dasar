export default function SayHelloForm() {

    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("input_name").value;
        document.getElementById("text_hello").innerText = `Hello ${name}`;
    }
    return (
        <div>
            <form>
                <input id="input_name"/>
                <button onClick={handleClick}>SayHello</button>
            </form>
            <h1 id="text_hello">Hello Word</h1>
        </div>
    )
}