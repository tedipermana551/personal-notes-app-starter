import React from "react";
import {useSearchParams} from "react-router-dom";
import { getArchivedNotes,unarchiveNote,deleteNote } from "../utils/local-data";
import SearchBar from "../component/SearchBar";
import NoteList from "../component/NoteList";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || ''
        }

        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setState(() => {
            return {
                notes : getArchivedNotes(),
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => {
            return {
                notes : getArchivedNotes(),
            }
        });
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        });

        return (
        <div>
            <h2>Catatan Diarsipkan</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NoteList notes={notes} onArchive={this.onUnarchiveHandler} onDelete={this.onDeleteHandler} />
        </div>
        );
    }
}

export default ArchivePageWrapper;