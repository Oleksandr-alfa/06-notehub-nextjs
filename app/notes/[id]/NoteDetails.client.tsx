// app/notes/[id]/NoteDetails.client.tsx

"use client";
import css from '@/app/notes/[noteId]/NoteDetails.page.module.css';
import Link from 'next/link';

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getSingleNote } from "@/lib/api";

const NoteDetailsClient = () => {
	const { id } = useParams<{ id: string }>();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !note) return <p>Some error..</p>;

  // const formattedDate = note.updatedAt
  //   ? `Updated at: ${note.updatedAt}`
  //   : `Created at: ${note.createdAt}`;

  return (
   <li key={note.id} className={css.listItem}>
                    <h2 className={css.title}>{note.title}</h2>
                    <p className={css.content}>{note.content}</p>
                    <div className={css.footer}>
                        <span className={css.tag}>{note.tag}</span>
                        <Link href={`/notes/${note.id}`}>View details</Link>
                        <button  className={css.button} >Delete</button>
                    </div>
                </li>
  );
};

export default NoteDetailsClient;
