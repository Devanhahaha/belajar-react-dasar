{/* mengimport Row dari file Row.jsx */}
{/* membuat/mendefinisikan component react bernama table yang di eksport secara default */}
{/* komponen table akan mereturn elemen table yang memiliki atribut border bernilai 1 */}
{/* elemen table tersebut memiliki elemen tbody yang berisi 3 elemen Row */}

import Row from "./Row";
export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="Satu" />
                <Row id="2" text="Dua" />
                <Row id="3" text="Tiga" />
            </tbody>
        </table>
    )
}