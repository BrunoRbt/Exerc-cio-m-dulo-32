import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/actions';
import { Form, Input, Button } from './styles/ContactFormStyles';
import { FaUserPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const ContactForm = ({ currentContact, setCurrentContact }) => {
    const [name, setName] = useState(currentContact ? currentContact.name : '');
    const [email, setEmail] = useState(currentContact ? currentContact.email : '');
    const [phone, setPhone] = useState(currentContact ? currentContact.phone : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error("Por favor, insira um e-mail válido!");
            return;
        }
        const contactData = { id: currentContact ? currentContact.id : Date.now(), name, email, phone };

        if (currentContact) {
            dispatch(editContact(contactData));
            toast.success("Contato editado com sucesso!");
        } else {
            dispatch(addContact(contactData));
            toast.success("Contato adicionado com sucesso!");
        }

        setName('');
        setEmail('');
        setPhone('');
        setCurrentContact(null); // Reset current contact
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2><FaUserPlus /> {currentContact ? 'Editar Contato' : 'Adicionar Contato'}</h2>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" required />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
            <Button type="submit">{currentContact ? 'Salvar' : 'Adicionar'}</Button>
        </Form>
    );
};

export default ContactForm;