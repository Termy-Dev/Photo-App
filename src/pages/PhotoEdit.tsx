import React, { useEffect, useState } from 'react'
import { editPhoto } from '../Interface/editPhoto';
import LoadingButton from '@mui/lab/LoadingButton';
import { Editer } from '../Components/Editer';


const url: string = "https://api.unsplash.com/photos/random";


export default function PhotoEdit() {

    const [loading, setLoading] = useState(false);
    const [imgURL, setImgURL] = useState("")


    const loadData = async () => {
        setLoading(true);
        const requestOptions = {headers: { 'Authorization': 'Client-ID _qNjo6P51cQ5FQBCAMEmmRol2cmw3f1QsJ5yEVuEkaI'}}
        const response = await fetch(`${url}`, requestOptions);
        const data = await response.json() as editPhoto;
        setImgURL(data.urls.small)
        setTimeout(() => {setLoading(false)}, 1700);
    }
    
    useEffect(() => {
        loadData()
    },[]);

 

  return (
      <div>
        
        <div className='container-photo'>
              <img
                  src={`${imgURL}?w=248&fit=crop&auto=format`}
                  srcSet={`${imgURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
              />
        </div>

        <div className="autoCenterFlex">
            <LoadingButton
              size="large"
              onClick={loadData}
              loading={loading}
              variant="contained"
            >
              New Photo
            </LoadingButton>
        </div>

        <ul>
          <Editer type="sepia" max={1} default={0.7} src={imgURL}/>
          <Editer type="blur" max={12} default={2} unit="px" src={imgURL} />
          <Editer type="contrast" max={500} default={50} unit="%" src={imgURL}/>
          <Editer type="saturate" max={10} default={2} src={imgURL}/>
          <Editer type="hue-rotate" max={360} default={180} unit="deg" src={imgURL} />
          <Editer type="grayscale" max={100} default={100} unit="%" src={imgURL} />
          <Editer type="brightness" max={5} default={1.5} src={imgURL} />
          <Editer type="invert" max={1} default={1} src={imgURL} />
        </ul>

      </div>
  )
  
}
