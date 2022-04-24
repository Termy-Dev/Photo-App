import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RootObject } from '../Interface/photo';
import InfoIcon from '@mui/icons-material/Info';
import "../App.css"
import { useNavigate } from 'react-router-dom';


const url: string = "https://api.unsplash.com/photos";


export default function Photos() {
    const [photo,setPhoto] = useState([] as RootObject[]);
    const [page,setPage] = useState(1);

    const navigate = useNavigate()

    const loadData = async () => {
      const requestOptions = {headers: { 'Authorization': 'Client-ID _qNjo6P51cQ5FQBCAMEmmRol2cmw3f1QsJ5yEVuEkaI'}}
      const response = await fetch(`${url}?page=${page}`, requestOptions);
      const data = await response.json()
      setPhoto(data);
    }
  
    useEffect(() => {
      loadData()
    },[page] )

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
  

  
  
    return (
      <div>

        <Box className='autoCenter' sx={{ width: 1000, height: 800, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {photo.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                    src={`${item.urls.small_s3}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.alt_description}
                    loading="lazy"                
                    />
                    <ImageListItemBar
                        title={item.alt_description}
                        subtitle={item.user.name}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.user.name}`}
                            onClick={() => navigate(String(item.id))}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                    />

                </ImageListItem>
                ))}
            </ImageList>
        </Box>
       
       <Box className='autoCenterFlex'>
            <Stack spacing={4}>
                <Pagination  count={300} page={page} onChange={handleChange} variant="outlined" color="primary"/>
            </Stack>
       </Box>
            
      </div>
    );
}
