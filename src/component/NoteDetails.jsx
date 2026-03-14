import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils";

function NoteDetails({ title, body, createdAt }) {
    createdAt = showFormattedDate(createdAt);
    
    return (
        <div className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{createdAt}</p>
            <p className="detail-page__body">{body}</p>
        </div>
    )
}

NoteDetails.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteDetails;