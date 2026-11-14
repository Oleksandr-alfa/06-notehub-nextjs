import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";


async function NotesPage() {
    const res = await fetchNotes();
    return (
        <NoteList notes={res.notes} ></NoteList>
    )
}

export default NotesPage;