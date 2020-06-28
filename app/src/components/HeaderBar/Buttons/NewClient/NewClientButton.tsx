import React from "react";
import Button from 'react-bootstrap/Button';
export default class NewClientButton extends React.Component{

    constructor(props: any){
        super(props)
    }
    render(){
        return(
        <Button variant='primary'>New Client</Button>
        );
    }

}