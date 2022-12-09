import { getAuth } from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { app, databaseApp } from "../../firebase/firebaseConfig";
import toastError from "../ToastError";
import toastSuccess from "../ToastSuccess";

const usersRef = collection(databaseApp, "users");
const auth = getAuth(app);
const add = async () => {
    const user = auth.currentUser;
    await setDoc(doc(usersRef, user.email), {
        email: user.email,
        name: user.displayName,
        contacts: []
    })
};
const addWithGoogle = async (user, users) => {
    const haveEmail = users.filter((p) => p.email === user.email);
    if (haveEmail[0]) {
        return;
    }
    else {
        await setDoc(doc(usersRef, user.email), {
            email: user.email,
            name: user.displayName,
            contacts: []
        })
    }
}

const addContact = async (contact, users) => {
    const user = auth.currentUser
    const findUser = users.find((p) => p.email === user.email);
    if (contact === user.email) {
        toastError("Você nçao pode adicionar você mesmo");
        return false;
    }
    const alreadyAdded = findUser.contacts.find((p) => p.email === contact);
    if (alreadyAdded) {
        toastError("Este contato já está adicionado na sua lista.")
        return false;
    }
    const findContact = users.find((p) => p.email === contact);
    if (!findContact) {
        toastError('Usuário inexistente. Verifique o e-mail digitado');
        return false;
    }
    try {
        await setDoc(doc(usersRef, user.email), {
            name: findUser.name,
            email: findUser.email,
            contacts: [...findUser.contacts, { email: findContact.email, name: findContact.name }]
        })
        toastSuccess("Contato adicionado!");
        return true;
    } catch (error) {
        toastError("Não foi possível adicionar esse contato");
        return false;
    }
}

const getContacts = (users) => {
    const user = auth.currentUser
    const findUser = users.find((p) => p.email === user.email);
    return findUser.contacts;
}


export default {
    add,
    addWithGoogle,
    addContact,
    getContacts
}