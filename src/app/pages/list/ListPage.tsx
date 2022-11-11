import { useState } from "react";
import { Table } from "react-bootstrap";

function ListPage() {
    const [list] = useState<string[]>(['Teste 1', 'Teste 2']);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value) => {
                        return <tr>
                            <td key={value}>{value}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListPage;