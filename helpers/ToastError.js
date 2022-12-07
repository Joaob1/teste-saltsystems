import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
const toastError = (message) => {
    injectStyle();
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
};

export default toastError;
