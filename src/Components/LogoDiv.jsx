import { ImageList, ImageListItem, Paper } from '@mui/material';
import * as React from 'react';

export default function LogoDiv(){
    return(
        <ImageList cols={1}>
            <ImageListItem sx={{ width: 400, justifySelf: "center" }}>
                <img src="public/images/M.svg" />
            </ImageListItem>
        </ImageList>
    )
}