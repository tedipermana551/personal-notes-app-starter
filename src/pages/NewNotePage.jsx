import React from "react";
import { addNote } from "../utils/network-data";
import { MdDoneOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function NewNotePage() {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

    function onTitleChangeEventHandler(event) {
        setTitle(event.target.innerHTML);
    }

    function onBodyChangeEventHandler(event) {
        setBody(event.target.innerHTML);
    }

    async function onSubmitEventHandler(event) {
        event.preventDefault();
        await addNote({ title, body });
        navigate('/');
    }

    return (
        <form className="add-new-page__input" onSubmit={onSubmitEventHandler}>
            <div
             className="add-new-page__input__title"
             data-placeholder={locale === 'id' ? 'Judul catatan' : 'Note title'}
             contentEditable
             onInput={onTitleChangeEventHandler}/>

            <div
             className="add-new-page__input__body"
             data-placeholder={locale === 'id' ? 'Buat catatan baru' : 'Create a new note'}
             contentEditable
             onInput={onBodyChangeEventHandler}/>

            <div className="action">
            <button type="submit"><MdDoneOutline/></button>
            </div>
            
            </form>
    )

}

// function NewNoteWrapper(Component) {
//     return function (props) {
//         const navigate = useNavigate();
//         return <Component {...props} navigate={navigate} />
//     }
// }

// class NewNotePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: '',
//             body: '',
//         }

//         this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
//         this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
//         this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//     }

//     onTitleChangeEventHandler(event) {
//         this.setState(() => {
//             return {
//                 title: event.target.innerHTML,
//             }
//         });
//     }

//     onBodyChangeEventHandler(event) {
//         this.setState(() => {
//             return {
//                 body: event.target.innerHTML,
//             }
//         });
//     }

//     onSubmitEventHandler(event) {
//         event.preventDefault();
//         addNote(this.state);
//         this.props.navigate('/');
//     }

//     render() {
//         return (
//             <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
//             <div
//             className="add-new-page__input__title"
//             data-placeholder="Judul catatan"
//             contentEditable
//             onInput={this.onTitleChangeEventHandler}/>

//             <div
//             className="add-new-page__input__body"
//             data-placeholder="Buat catatan baru"
//             contentEditable
//             onInput={this.onBodyChangeEventHandler}/>

//             <div className="action">
//             <button type="submit"><MdDoneOutline/></button>
//             </div>
            
//             </form>
//         );
//     }
// }

export default NewNotePage;