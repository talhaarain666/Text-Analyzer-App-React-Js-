import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Box, Snackbar } from '@mui/material';


export default function AlertComponent(props) {

   
    const [open,setOpen] = React.useState(true)

    return <>
        {/* 
        <Box sx={{ width: '100%' }}> */}

            {/* <Alert

                sx={{ my: 2 }}
            >
                {props.alert.msg}
            </Alert> */}
            {props.alert && 
            <Snackbar open={open}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {props.alert.msg}
                </Alert>
            </Snackbar>}

        {/* </Box> */}
{/* // } */}
    </>
}