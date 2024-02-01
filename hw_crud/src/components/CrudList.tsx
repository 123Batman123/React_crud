import axios from "axios";
import { TypeNote } from "./MainPage";
const BASE_URL = 'http://localhost:7070/notes'

export const CrudList = {
    get: (changeState: React.Dispatch<React.SetStateAction<TypeNote[]>>) => {
        axios({
            method: 'get',
            url: BASE_URL,
        })
            .then(i => changeState(i.data))
    },

    post: (text: string) => {
        axios({
            method: 'post',
            url: BASE_URL,
            data: {
                content: text
            }
        })
    },

    delete: (id: number) => {
        axios({
            method: 'delete',
            url: BASE_URL + `/${id}`,
        })
    }
}