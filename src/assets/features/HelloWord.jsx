export default function HelloWord() {
    const props = {
        text: "Hello World"
    }
    return (
        <div>
            <HeaderHelloWord {...props}/> {/* spread sintaks menampilkan hello word */}
            <ParagraftHelloWord />
        </div>
    )
}

function HeaderHelloWord({text = "lupa kasih text"}) {
    return (
        <h1>{text.toUpperCase()}</h1>
    )
}

function ParagraftHelloWord() {
    const text = "Semangat Belajarnya! Dari Programmer Zaman Now";
    return (
        <p>{text.toLowerCase()}</p>
    )
}