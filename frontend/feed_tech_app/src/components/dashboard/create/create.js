import React,{Component} from 'react';
import styles from './create.module.css';
import Navbar from '../navbar/navbar';


class Create extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Navbar />
                Create new feed
            </div>
        )
    }
}

export default Create;