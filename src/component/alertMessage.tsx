
import { IAlertMessage } from "../model/component/IAlertMessage";
import React, { useState, useEffect } from "react";

interface Props {
    message: IAlertMessage,
    changeSetShowMessage: Function
}

export default function AlertMessage(props: Props) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
            props.changeSetShowMessage()
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${show ? `btn-auto mt-2 flex h-full w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.alertMessage}` : ""}`}>
            {props.message.alertMessage}
        </div>
    );
};