import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import AddPostOnModal from "./AddPostOnModal"
import fire from "../Configurations/fire"
import AddPost from "../Profile/AddPost"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function AddPostModal(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const { username, user } = props
    const [data, setData] = useState(null)
    useEffect(() => {
        fire.firestore()
            .collection("users")
            .doc(username)
            .onSnapshot((doc) => {
                setData(doc.data())
            })
    }, [])
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableBackdropClick
            >
                <AddPostOnModal username={username} data={data} user={user} />
            </Modal>
        </div>
    )
}
export default AddPostModal
