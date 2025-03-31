{/* nested component */}
export default function Container({children}) {
    return (
        <div>
            <h1 className="header">Programmer Baru Belajar React</h1>
            {children}
            <footer>
                <p className="ppp">&copy; 2021 - React</p>
            </footer>
        </div>
    )
}