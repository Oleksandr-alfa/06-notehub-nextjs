// import { QueryClient } from "@tanstack/react-query";
// import { getSingleNote } from "@/lib/api";
// import NoteDetailsClient from "./NoteDetails.client";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
};

async function NoteDetails ({ params }: NoteDetailsProps) {
  const { id } = await params;
 
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["note", id],
  //   queryFn: () => getSingleNote(id),
  // });

  return (<div><p>Note{id}</p></div>);
};

export default NoteDetails;
