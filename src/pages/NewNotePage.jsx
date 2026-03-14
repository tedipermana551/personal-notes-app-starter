import React from "react";
import { addNote } from "../utils/local-data";
import { MdDoneOutline } from "react-icons/md";

class NewNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.innerHTML,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        addNote(this.state);
        navigate('/');
    }

    render() {
        return (
            <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
            <div
            className="add-new-page__input__title"
            data-placeholder="Judul catatan"
            contentEditable
            onInput={this.onTitleChangeEventHandler}/>

            <div
            className="add-new-page__input__body"
            data-placeholder="Buat catatan baru"
            contentEditable
            onInput={this.onBodyChangeEventHandler}/>

            <div className="action">
            <button type="submit"><MdDoneOutline/></button>
            </div>
            
            </form>
        );
    }
}

export default NewNotePage;