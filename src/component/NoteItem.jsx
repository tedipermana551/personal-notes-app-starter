import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils";
import NoteActionButton from "./NoteActionButton";
import { MdDelete, MdArchive } from "react-icons/md";

function NoteItem({id, title, body, createdAt, onArchive, onDelete}) {
    createdAt = showFormattedDate(createdAt);

    return (
        <div className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <div className="note-item__action">
                <NoteActionButton variant="archive" onClick={() => onArchive(id)} icon={<MdArchive />} />
                <NoteActionButton variant="delete" onClick={() => onDelete(id)} icon={<MdDelete />} />
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItem;