import React,{Component} from 'react';
import styles from './dashboard.module.css';
import {FiSettings} from 'react-icons/fi';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return(
            <div>
                <FiSettings />                
            </div>
        )
    }
}

export default Dashboard;