import axios from "axios";

import type { Note } from "@/types/note";



export interface NotesHttpResponse {
  notes: Note[];
    totalPages: number;
};

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const BASE_URL = "https://notehub-public.goit.study/api";

const API = axios.create({
    baseURL: `${BASE_URL}/notes`,
    headers: {
        Authorization: `Bearer ${myKey}`,
    }
});

export const fetchNotes = async (): Promise<NotesHttpResponse>=> {
    const { data } = await API.get<NotesHttpResponse>("/",{
        params: {
          
           
            perPage: 20,
        }
    })
    return data;
}

export const deleteNote = async (id: string): Promise<Note> => {
    const res = await API.delete<Note>(`/${id}`);
    return res.data;
}

export const getSingleNote = async (id: string): Promise<Note> => {
    const res = await API.get<Note>(`/${id}`);
    return res.data;
}