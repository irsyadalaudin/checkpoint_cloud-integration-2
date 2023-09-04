/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { GoogleMap, OverlayView, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '1230px',
    height: '500px'
}

const center = {
    lat: 30.051871144791683,
    lng: 31.332972218274286,
}

const Label = () => (
    <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >

        <p className='whitespace-nowrap m-0 text-lg '>17 Henin Ibn Ishaq, <br />Al-Hay As-Sabea, <br /> Nasr City, Cairo</p>
    </OverlayView>
)
/* */

const Maps = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ''
    })
    
    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        setMap(map)
    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='px-20'>
            <p>We're located at , 17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo</p>
            <p>For pickup or for a quick and easy delivery, Call us at +20 155 497 4856 </p>
            <h1 className='pt-5 text-center'>visit our biskuit store</h1>    
            <div className='mb-10'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >

                    <Marker position={center} />
                    <Label />
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}

export default Maps