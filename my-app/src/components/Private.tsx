import React from 'react'
import { Navigate} from 'react-router-dom'

type PrivateProps = {
    children: JSX.Element
}

const Private = (props: PrivateProps) => {
    const isAdmin = true;
    if(!isAdmin){
        return <Navigate to = "/login" />
    }
    return props.children
}

export default Private