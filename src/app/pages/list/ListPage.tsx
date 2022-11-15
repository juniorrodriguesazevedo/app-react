import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { TaskInterface } from "../../shared/Interfaces/TaskInterface";
import { TaskService } from "../../shared/services/api/tasks/TaskService";

function ListPage() {
    const [list, setList] = useState<TaskInterface[]>([]);

    useEffect(() => {
        TaskService.index().then((res) => setList(res));
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Completo</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((task) => {
                        return <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.isCompleted === true ? 'Sim' : 'Não'}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListPage;