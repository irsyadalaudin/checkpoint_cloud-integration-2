/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { GoogleMap, OverlayView, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
// import { Icon } from '@mdi/react'
import { Icon } from '@iconify/react'

const containerStyle = {
    width: '1230px',
    height: '500px'
}

const center = {
    lat: 30.0518522,
    lng: 31.3323257,
}

const Label = () => (
    <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
        <p>
            17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo
        </p>
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
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='px-20'>
            <p>We're located at , 17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo</p>
            <p>For pickup or for a quick and easy delivery, Call us at +20 155 497 4856 </p>
            <h2 className='map-h2'>visit our biskuit store</h2>    
            <div className='google-map'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    >

                    <Marker position={center} />
                    {/* <Label text='17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo'/> */}
                    <Label />
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}

export default Maps
