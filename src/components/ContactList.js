import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions';
import ContactItem from './ContactItem';
import { ListContainer } from './styles/ContactListStyles';

const ContactList = ({ setCurrentContact }) => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    return (
        <ListContainer>
            {contacts.length > 0 ? (
                contacts.map(contact => (
                    <ContactItem 
                        key={contact.id} 
                        contact={contact} 
                        onRemove={() => dispatch(removeContact(contact.id))} 
                        onEdit={() => setCurrentContact(contact)} 
                    />
                ))
            ) : (
                <h3>Nenhum contato encontrado.</h3>
            )}
        </ListContainer>
    );
};

export default ContactList;