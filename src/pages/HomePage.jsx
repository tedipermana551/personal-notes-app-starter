import React from "react";
import {useSearchParams} from "react-router-dom";
import { getActiveNotes,archiveNote,deleteNote } from "../utils/network-data";
import SearchBar from "../component/SearchBar";
import NoteList from "../component/NoteList";
import LocaleContext from "../contexts/LocaleContext";

function HomePage (){
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''});
    const [notes, setNotes] = React.useState([]);
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(()=>{
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    async function onArchiveHandler(id) {
        await archiveNote(id);
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    async function onDeleteHandler(id) {
        await deleteNote(id);
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
    <div>
       <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
       <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
       <NoteList notes={filteredNotes} onArchive={onArchiveHandler} onDelete={onDeleteHandler} />
    </div>
    )
}

export default HomePage;