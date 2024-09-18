import React from 'react';
import { ItemContainer, Info, Button } from './styles/ContactItemStyles';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

const ContactItem = ({ contact, onRemove, onEdit }) => {
    return (
        <CSSTransition
            in={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <ItemContainer>
                <Info>
                    <h4>{contact.name}</h4>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </Info>
                <div>
                    <Button onClick={onEdit}><FaEdit /></Button>
                    <Button onClick={onRemove}><FaTrash /></Button>
                </div>
            </ItemContainer>
        </CSSTransition>
    );
};

export default ContactItem;