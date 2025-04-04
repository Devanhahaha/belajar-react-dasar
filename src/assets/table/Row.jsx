{/* counter merupakan sebuah variabel global */}
{/* membuat/mendefinisikan component react bernama row yang di eksport secara default, 
    komponen ini menerima properti props dengan nama text melalui destrukturisasi */}
{/* setiap kali komponen row dirender, maka nilai counter akan bertambah 1*/}
{/* komponen row akan mereturn elemen tr yang berisi elemen td yang berisi nilai dari counter dan text */}
{/* elemen td pertama akan berisi nilai dari counter */}
{/* elemen td kedua akan berisi nilai dari properti text */}

export default function Row({id, text}) {
    return (
        <tr>
        <td>{id}</td>
        <td>{text}</td>
        </tr>
    )
}