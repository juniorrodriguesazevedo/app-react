import api from "../api";
import { TaskInterface } from './../../../Interfaces/TaskInterface';

const index = async (): Promise<TaskInterface[]> => {
    try {
        const { data } = await api.get('/tasks');
        return data;
    } catch (error: any) {
        return error;
    }
};

const create = async (data: TaskInterface): Promise<TaskInterface[]> => {
    try {
        return await api.post('/tasks', data);
    } catch (error: any) {
        return error;
    }
};

const show = async (id: number): Promise<TaskInterface[]> => {
    try {
        const { data } = await api.get(`/tasks/${id}`);
        return data;
    } catch (error: any) {
        return error;
    }
};

const update = async (id: number, data: TaskInterface): Promise<TaskInterface[]> => {
    try {
        return await api.patch(`/tasks/${id}`, data);
    } catch (error: any) {
        return error;
    }
};

const destroy = async (id: number): Promise<string> => {
    try {
        await api.delete(`/tasks/${id}`);

        return 'Deletado';
    } catch (error: any) {
        return error;
    }
};

export const TaskService = {
    index,
    create,
    show,
    update,
    destroy
}