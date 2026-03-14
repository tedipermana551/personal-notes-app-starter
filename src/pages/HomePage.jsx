import React from "react";
import {useSearchParams} from "react-router-dom";
import { getActiveNotes,archiveNote,deleteNote } from "../utils/local-data";
import SearchBar from "../component/SearchBar";
import NoteList from "../component/NoteList";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || ''
        }

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.setState(() => {
            return {
                notes : getActiveNotes(),
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
                notes : getActiveNotes(),
            }
        });
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        });

        return (
        <div>
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NoteList notes={notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        </div>
        );
    }
}

export default HomePageWrapper;