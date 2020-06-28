import './HeaderBar.css';
import React from 'react';
import NewClientButton from './Buttons/NewClient/NewClientButton'
import ExistingClientButton from './Buttons/ExistingClient/ExistingClientButton';


export default class HeaderBar extends React.Component{

    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <div id="headerBar">
                <span id="headerTitle">
                    <h3>Customer Portal</h3>
                </span>
                <span> 
                <NewClientButton/>
                <ExistingClientButton/>
                </span>
            </div>
        );
    }

}

