import React from "react";
import  Typography from '@mui/material/Typography'

function PageTitle (props) {
return (
<div>
<Typography variant='h4' gutterBottom>{props.title}</Typography>
</div>
)
}

export default PageTitle;