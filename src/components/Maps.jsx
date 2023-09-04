/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
}

const center = {
    lat: 30.0518522,
    lng: 31.3323257
}

const Maps = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ''
    })
    
    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        // const bounds = new window.google.maps.LatLngBounds()
        // map.fitBounds(bounds)
        // setMap(map)
        
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/*  */}
        <></>
        </GoogleMap>
    ) : <></>
}


export default Maps