import React,{Component} from 'react';
import styles from './list.module.css';
import Navbar from '../navbar/navbar';


class List extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Navbar />
                This is the list
            </div>
        )
    }
}

export default List;