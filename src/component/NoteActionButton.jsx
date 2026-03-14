import React from 'react';

function NoteActionButton({variant, onClick, icon}) {
    return (
        <button className={`${variant}-button`} onClick={onClick}>
            {icon}
        </button>
    );
}

export default NoteActionButton;