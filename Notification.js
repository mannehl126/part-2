import React from 'react'
const sucessfullyStyle = {
    color: 'green',
    background: 'lightgrey',
    front_size:20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    magin_bottom:10
}

const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    front_size:20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    magin_bottom:10

}

const Notification = ({message}) =>{
    if (message === null){
        return null
    }

    if (message.includes(`ERROR`)){
        return(
            <div style={errorStyle} className="error">
                {message}

            </div>
        )
    }else{
        return(
            <div style={sucessStyle} className="error">
                {message}
            </div>
        )
    }
}

export default Notification
