import { Box, Button, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



export default function TextAnalyzerApp(props) {





    const [text, setText] = useState("")

    let textValue = (e) => {
        setText(e.target.value)
    }

    let convertToLowercase = () => {
        var lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
        props.showAlert("Converted to Lowercase")

    }

    let convertToUppercase = () => {
        var upperCaseText = text.toUpperCase()
        setText(upperCaseText)
        props.showAlert("Converted to Uppercase")

    }

    let clearAll = () => {
        setText("")
        props.showAlert("Cleared All")
    }

    let copyText = () => {
        var textVal = document.getElementById("outlined-multiline-static")
        textVal.select()
        document.execCommand("copy")
        props.showAlert("Copied to Clipboard")
        document.getSelection().removeAllRanges();

    }

    let handleTextSpace = () => {
        let textWithOneSpace = text.trim().replace(/\s+/g, " ");
        setText(textWithOneSpace)
        props.showAlert("Extra Spaces Removed")

    }




    return <>

        <Box sx={{ padding: "5% 10% 0% 10%" }}>





            <Box sx={{ position: "relative" }}>

                <TextField
                    sx={{ width: "100%", backgroundColor: "#DCDCDC" }}
                    id="outlined-multiline-static"
                    label="Enter Text Here"
                    inputProps={{ style: { color: "black" } }}
                    multiline
                    rows={4}
                    value={text}
                    onChange={(e) => textValue(e)}
                />
                <Button sx={{ margin: "1%", position: "absolute", right: "0%", bottom: "0%" }} onClick={copyText} >
                    <ContentCopyIcon color='action' />
                </Button>
            </Box>


            <Button disabled={text.length === 0} sx={{ margin: "2%", backgroundColor: props.mode.backgroundColor, color: props.mode.color }} variant='outlined' color='inherit' onClick={convertToLowercase}>Convert to lowercase</Button>
            <Button disabled={text.length === 0} sx={{ margin: "2%", backgroundColor: props.mode.backgroundColor, color: props.mode.color }} variant='outlined' color='inherit' onClick={convertToUppercase}>Convert To Uppercase</Button>
            <Button disabled={text.length === 0} sx={{ margin: "2%", backgroundColor: props.mode.backgroundColor, color: props.mode.color }} variant='outlined' color='inherit' onClick={handleTextSpace}>Remove Extra Spaces</Button>
            <Button disabled={text.length === 0} sx={{ margin: "2%", backgroundColor: props.mode.backgroundColor, color: props.mode.color }} variant='contained' color='inherit' onClick={clearAll}>Clear All</Button>
            <Box disabled={text.length === 0} sx={{ color: props.mode.backgroundColor === "#006400" ? "black" : props.mode.color }}>
                <Typography variant='p'>{text.length} characters & </Typography>
                <Typography variant='p'>{text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words</Typography>

            </Box>


        </Box>
    </>

}