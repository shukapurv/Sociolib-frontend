import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Heading2 from "@components/Heading2";
import axios from "axios";
import User from "@components/Users/user";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btn2: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#fa252d",
        padding: "15px 20px",
        border: `1px solid #fa252d`,
        borderRadius: "500px",
        transition: "all .2s ease-in",

        "&:hover": {
            color: "#fff",
            background: "#f23a40",
        },
    },
    btn: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: theme.palette.primary.main,
        padding: "15px 20px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "500px",
        transition: "all .2s ease-in",

        "&:hover": {
            color: "#fff",
            background: theme.palette.primary.main,
        },
    },
}));
const PendingRequests = ({ token }) => {
    const classes = useStyles();
    const [sent, setSent] = useState([]);
    const [received, setReceived] = useState([]);
    const [step, setStep] = useState(0);
    useEffect(() => {
        axios
            .get(
                `https://sociolib-api.herokuapp.com/friends/requests/`,
                { headers: { Authorization: `Token ${token}` } },
            )
            .then((res) => {
                console.log(res)
                setSent(res.data.sent);
                setReceived(res.data.received);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [step])
    const handleCancel = (id) => {
        axios
            .patch(
                `https://sociolib-api.herokuapp.com/friends/${id}/`,
                {},
                { headers: { Authorization: `Token ${token}` } },
            )
            .then((res) => {
                console.log(res)
                setStep(++step)
            })
            .catch((err) => {
                console.error(err);
            });
    }
    const handleAccept = (id) => {
        axios
            .post(
                `https://sociolib-api.herokuapp.com/friends/req/${id}/`,
                {},
                { headers: { Authorization: `Token ${token}` } },
            )
            .then((res) => {
                console.log(res)
                setStep(++step)
            })
            .catch((err) => {
                console.error(err);
            });
    }
    const handleDecline = (id) => {
        axios
            .delete(
                `https://sociolib-api.herokuapp.com/friends/req/${id}/`,
                { headers: { Authorization: `Token ${token}` } },
            )
            .then((res) => {
                console.log(res)
                setStep(++step)
            })
            .catch((err) => {
                console.error(err);
            });
    }
    return <>
        <div className="h-1/2">
            <Heading2 className="text-gray-700 pb-8 pl-16">
                Requests Received
            </Heading2>
            <div>
                <ul className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                    {received.map((a) => (
                        <li key={a.id}>
                            <User {...a} />
                            <div className="flex">
                                <div className="cursor-pointer flex justify-center items-center py-2 pr-1" onClick={() => handleAccept(a.id)}>
                                    <div className={`${classes.btn} `}>Accept</div>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center py-2" onClick={() => handleDecline(a.id)}>
                                    <div className={`${classes.btn2} `}>Decline</div>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
        <div className="h-1/3">
            <Heading2 className="text-gray-700 pb-8 pl-16">
                Requests Sent
            </Heading2>
            <div>
                <ul className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                    {sent.map((a) => (
                        <li key={a.id}>
                            <User {...a} />
                            <div className="cursor-pointer flex justify-center items-center" onClick={() => handleCancel(a.id)}>
                                <div className={`${classes.btn2} w-1/3 `}>Cancel</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <style>{`

        `}</style>
    </>;
};

export default PendingRequests;
