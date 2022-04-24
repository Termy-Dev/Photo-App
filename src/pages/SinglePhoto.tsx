import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {PhotoCard} from '../Components/Card';
import { SinglePhotoInterface } from '../Interface/singlePhoto';

const url: string = "https://api.unsplash.com/photos";

export const SinglePhoto = () => {

    const {id} = useParams() as {id: string};
    const [singlePhoto, setSinglePhoto] = useState<SinglePhotoInterface>();

    const navigate = useNavigate()

    const loadData = async () => {
        const requestOptions = {headers: { 'Authorization': 'Client-ID _qNjo6P51cQ5FQBCAMEmmRol2cmw3f1QsJ5yEVuEkaI'}}
        const response = await fetch(`${url}/${id}`, requestOptions)
        const item = await response.json() as SinglePhotoInterface
        setSinglePhoto(item)
    }

    useEffect(()  => {
        loadData()
     },[id])
 
    
  return (
      <>
        {singlePhoto && 
        <PhotoCard
            key={singlePhoto.id}
            photo={singlePhoto}
        />}
      </>
  )
  
}
