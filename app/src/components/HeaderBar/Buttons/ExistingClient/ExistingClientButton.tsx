import React from "react";
import Button from 'react-bootstrap/Button';
import './ExistingClientButton.css';

export default class ExistingClientButton extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <span id="button">
                <Button variant='primary'>Existing Client</Button>
            </span>
        );
    }

}