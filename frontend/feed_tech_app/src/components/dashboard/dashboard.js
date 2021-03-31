import React,{Component} from 'react';
import Navbar from './navbar/navbar';
class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
               <Navbar />
            </div>
        )
    }
}

export default Dashboard