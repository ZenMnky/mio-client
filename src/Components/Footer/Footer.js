import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <footer role="content-info">
                Developed by <a href='https://github.com/zenmnky' rel='noreferrer' target='_blank' >ZenMnky</a>
            </footer>
        )
    }
}