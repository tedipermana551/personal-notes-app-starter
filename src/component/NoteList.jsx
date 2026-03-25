import React from 'react';
import NoteItem from './NoteItem';
import LocaleContext from '../contexts/LocaleContext';

function NoteList({ notes, onArchive, onDelete }) {
    const { locale } = React.useContext(LocaleContext);

    if (notes.length === 0) {
        return (
            <p className="notes-list__empty-message">
                {locale === 'id' ? 'Tidak ada catatan' : 'No notes available'}
            </p>
        );
    };

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem 
                key={note.id}
                id={note.id}
                onArchive={onArchive}
                onDelete={onDelete}
                {...note} />
            ))}
        </div>
    );
}

export default NoteList;