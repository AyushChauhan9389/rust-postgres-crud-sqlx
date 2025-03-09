
export interface Note{
    category: string
    content: string
    createdAt: string
    id: string
    published: boolean
    title: string
    updatedAt: string
}

export interface NotesApiResponse{
    notes: Note[]
    results: number
    status: string
}