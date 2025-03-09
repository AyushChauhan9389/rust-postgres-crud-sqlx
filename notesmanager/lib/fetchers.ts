import {NotesApiResponse} from "@/lib/types";

export async function FetchNotes(){
    const data = await fetch("http://localhost:8000/api/notes")
    const FilteredData: NotesApiResponse = await data.json()
    return FilteredData
}