import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

function EditData(props) {
    const classes = useStyles()
    const {
        validateAndSave,
        gender,
        setGender,
        data,
        setData,
        name,
        setName,
        bio,
        setBio,
        xname,
        setXnmae,
        xgpa,
        setXgpa,
        collegename,
        setCollegename,
        collegegpa,
        setCollegegpa,
        gradname,
        setGradname,
        gradgpa,
        setGradgpa,
        interest,
        setInterest,
        interests,
        setInterests,
        editSetter,
        setEditSetter,
    } = props
    return (
        <div className="profile-right-getData">
            <div className="profile-right-personal-info">
                <h1 style={{ marginBottom: "15px" }} className="text">
                    Personal Information
                </h1>
                <TextField
                    id="outlined-basic"
                    label="Enter Your name"
                    variant="outlined"
                    required
                    style={{
                        marginBottom: "15px",
                        width: "85%",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Add about"
                    variant="outlined"
                    style={{
                        marginBottom: "0px",
                        width: "85%",
                    }}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <FormControl
                    className={classes.formControl}
                    style={{
                        width: "85%",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Gender
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        onChange={(event) => {
                            setGender(event.target.value)
                        }}
                    >
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "3vw",
                }}
            >
                <h1
                    className="text"
                    style={{
                        marginBottom: "15px",
                    }}
                >
                    Educational Information
                </h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h2 className="text" style={{ marginBottom: "15px" }}>
                        X Class Details
                    </h2>
                    <TextField
                        id="outlined-basic"
                        label="School Name"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={xname}
                        onChange={(e) => setXnmae(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="GPA/Percentage"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={xgpa}
                        onChange={(e) => setXgpa(e.target.value)}
                    />
                    <h2 className="text" style={{ marginBottom: "15px" }}>
                        Intermediate Details
                    </h2>
                    <TextField
                        id="outlined-basic"
                        label="College Name"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={collegename}
                        onChange={(e) => setCollegename(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="GPA/Percentage"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={collegegpa}
                        onChange={(e) => setCollegegpa(e.target.value)}
                    />
                    <h2 className="text" style={{ marginBottom: "15px" }}>
                        Graduation Details
                    </h2>
                    <TextField
                        id="outlined-basic"
                        label="College   Name"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={gradname}
                        onChange={(e) => setGradname(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="GPA/Percentage"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                            width: "85%",
                        }}
                        value={gradgpa}
                        onChange={(e) => setGradgpa(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            return validateAndSave()
                        }}
                        style={{
                            color: "white",
                            backgroundColor: "#24292E",
                            width: "85%",
                        }}
                    >
                        Save details
                    </Button>
                    {console.log(gender)}
                </div>
            </div>
        </div>
    )
}

export default EditData
