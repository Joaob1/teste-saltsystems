const checkErrors = (form, errors, setErrors) => {
    let haveErrors = false;
    Object.entries(form)
        .reverse()
        .forEach((item) => {
            if (!item[1]) {
                setErrors({ ...errors, [item[0]]: "Este campo é obrigatório" });
                haveErrors = true;
            }
        });
    return haveErrors;
};

export default checkErrors;