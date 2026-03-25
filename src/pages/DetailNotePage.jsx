import React from "react";
import NoteDetails from "../component/NoteDetails";
import { getNote } from "../utils/network-data";
import { useParams } from "react-router-dom";

function DetailNotePage() {
    const { id } = useParams();
    const [note, setNote] = React.useState(null);

    React.useEffect(()=>{
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, [id]);

    if (note === null) {
        return <p>Catatan tidak ditemukan</p>;
    }

    return <NoteDetails {...note} />;
}

export default DetailNotePage;