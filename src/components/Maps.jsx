/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { GoogleMap, OverlayView, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'

// Define the container style for the Google Map
const containerStyle = {
    width: '1230px',
    height: '500px'
}

// Define the center position of the map using latitude and longitude
const center = {
    lat: 30.051871144791683,
    lng: 31.332972218274286,
}

// Define the Label component, which will be used to display text on the map
const Label = () => (
    <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
        {/* Display the address in a paragraph with line breaks */}
        <p className='whitespace-nowrap m-0 text-lg '>17 Henin Ibn Ishaq, <br />Al-Hay As-Sabea, <br /> Nasr City, Cairo</p>
    </OverlayView>
)

/* */
// Define the Maps component
const Maps = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ''
    })
    
    // Define state to keep track of the map instance
    const [map, setMap] = useState(null)

    // Define the onLoad callback function to set the map instance
    const onLoad = useCallback((map) => {
        setMap(map)
    }, [])

    // Define the onUnmount callback function to unset the map instance
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])

    // Render the Google Map when it's loaded
    return isLoaded ? (
        <div className='bg-yellow-800 px-20'>

            {/* Display location information. */}
            <p className='mt-0'>We're located at , 17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo</p>
            <p>For pickup or for a quick and easy delivery, Call us at +20 155 497 4856 </p>
            
            {/* Display a heading for the map section. */}
            <h1 className='pt-5 text-center'>visit our biskuit store</h1>    
            
            {/* Render the Google Map component. */}
            <div className='mb-10'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >

                    {/* Add a marker at the specified position. */}
                    <Marker position={center} />

                    {/* Render the Label component to display address text. */}
                    <Label />
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}

// Export the Maps component as the default export
export default Maps