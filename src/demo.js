import React,{useState,useEffect} from "react";
import './App.css'



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        console.log("hello")
        // alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1 className="hello">Hello World!</h1>
        );
    }
}

// class MyForm extends React.Component{
//
//     render() {
//         return (
//                 <form className="create-form">
//                     <div className="form-group">
//                        <label>First name:</label>
//                        <input type="text" />
//                     </div>
//                     <div className="form-group">
//                         <label>Last name:</label>
//                         <input type="text" />
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//
//
//         )
//     }
// }

export default Container;