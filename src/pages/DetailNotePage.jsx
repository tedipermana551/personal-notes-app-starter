import React from "react";
import NoteDetails from "../component/NoteDetails";
import { getNote, getAllNotes } from "../utils/local-data";
import { useParams } from "react-router-dom";

function DetailNotePageWrapper() {
    const { id } = useParams();
    return <DetailNotePage id={id} />;
}

class DetailNotePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id)
        };
    }

    render() {
        if (this.state.note === null) {
            return <p>Catatan tidak ditemukan</p>
        }

        return (
            <div className="detail-note-page">
                <NoteDetails {...this.state.note} />
            </div>
        );

    }
}

export default DetailNotePageWrapper;