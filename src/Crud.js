import React from "react";
import { Space, Table, Tag,Button } from 'antd';
import 'antd/dist/antd.css';
import {createRoutesFromChildren} from "react-router-dom";

class MyForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Record:[],
            EditForm:{
                fname:'',
                lname:'',
                age:'',
                gender:'',
                hobby:[]
            },
            EditIndex:'',
        }
    }
     handleInput(e){
        const name=e.target.name;
        const value=e.target.value;
        // console.log(value,"name")
        if (name==="hobby"){
            if (e.target.checked){
                this.state.EditForm.hobby.push(value);
                this.setState({EditForm:{...this.state.EditForm,hobby: this.state.EditForm.hobby}})

            }else {
                // console.log(this.state.EditForm.hobby,value,"gggg")
                const index = this.state.EditForm.hobby.indexOf(value);
                // only splice array when item is found
                this.state.EditForm.hobby.splice(index, 1); // 2nd parameter means remove one item only
                // this.setState({EditForm:{...this.state.EditForm, hobby: this.state.EditForm.hobby.splice(index, 1)}})
            }
            this.setState({EditForm:{...this.state.EditForm,hobby:this.state.EditForm.hobby}})
        }else {
            this.setState(  {EditForm:{...this.state.EditForm,[name]:value}});
        }
     }


    submitHandle(){
        // debugger
         if (this.state.EditIndex===''){
             console.log("aaaaa",this.state.EditForm)
             // this.setState({Record:[...this.state.Record,this.state.EditForm]});
             // setTimeout(()=> {
                 localStorage.setItem('Record',JSON.stringify([...this.state.Record,this.state.EditForm]));
             // },50)

         }else {
            console.log("jj")
            this.state.Record[this.state.EditIndex]=this.state.EditForm;
            // this.setState({Record:[...this.state.Record]});
            localStorage.setItem('Record',JSON.stringify(this.state.Record))
            this.setState({EditIndex:''});
        }
        // console.log(this.state.Record[index],"vvv")
        this.setState({EditForm:{fname: '',lname: '',age:'',gender:'',hobby:[]}});
     }
    componentDidMount() {
         const Data=JSON.parse(localStorage.getItem('Record'))||[]
        this.setState({Record:Data})
        console.log(Data,"nn")
    }
    // console.log(this.state.EditForm,"xxxxxxx")

    // console.log(this.state.Record,"kkkkkkkkkkkkkkkkkkkkkkkkk")

     handleEdit(index){
        console.log(index)
        const arr = JSON.parse(localStorage.getItem('Record'));
        this.setState({EditForm:arr[index]})
        console.log(arr[index],"eee");
        this.setState({EditIndex:(index)})
    }

     handleDelete(index) {

        console.log(index);
        this.state.Record.splice(index,1);
        this.setState([...this.state.Record]);
        // console.log(this.state.Record,"lll")
    }
    render() {
        // localStorage.setItem('Record',JSON.stringify(this.state.Record))
        console.log(this.state.EditIndex,"klkl")
        console.log(this.state.Arr,"yuuhiu")
        console.log(this.state.EditForm,"logged")
        console.log(this.state.Record,"record")
        // const columns = [
        //     {
        //         title: 'First Name',
        //         dataIndex: 'fname',
        //         key: 'firstname',
        //     },
        //     {
        //         title: 'Last Name',
        //         dataIndex: 'lname',
        //         key: 'lastname',
        //     },
        //     {
        //         title: 'Age',
        //         dataIndex: 'age',
        //         key: 'age',
        //     },
        //     {
        //         title: 'Action',
        //         render:((text,record,id)=>{
        //             return(
        //                 <>
        //             <Button type="primary" className="m-1" onClick={()=>handleEdit(id)} >Edit</Button>
        //                     {/*<Button type="primary" onClick={()=>handleDelete(id)}>Delete</Button>*/}
        //
        //                 </>
        //             )
        //         })
        //     }
        // ];

        return(
            <div>
                <h1>React crud</h1>
                <form className="container mt-5">
                    <div className="form-group">
                        <label htmlFor="fname">First name:</label>
                        <input type="text" name="fname" value={this.state.EditForm.fname} onChange={(e)=>this.handleInput(e)} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" name="lname" value={this.state.EditForm.lname} onChange={(e)=>this.handleInput(e)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Age:</label>
                        <input type="number" name="age" value={this.state.EditForm.age} onChange={(e)=>this.handleInput(e)}  />
                    </div>
                    <div className="form-group mt-3">
                        <label>choose gender:</label>
                        <input type="radio" name="gender" value="male" checked={this.state.EditForm?.gender=="male"} onChange={(e)=>this.handleInput(e)}  />Male
                        <input type="radio" name="gender" value="female" checked={this.state.EditForm?.gender=="female"} onChange={(e)=>this.handleInput(e)}  />Female
                    </div>
                    {console.log(this.state.EditForm.hobby,"hhhhhh")}
                    <div className="form-group mt-3">
                        <label>Hobby:</label>
                        <input type="checkbox" name="hobby" value="hocky" checked={this.state.EditForm.hobby.includes("hocky")}  onChange={(e)=>this.handleInput(e)}  />Hocky
                        <input type="checkbox" name="hobby" value="music" checked={this.state.EditForm.hobby.includes("music")} onChange={(e)=>this.handleInput(e)}  />Music
                        <input type="checkbox" name="hobby" value="cricket" checked={this.state.EditForm.hobby.includes("cricket")} onChange={(e)=>this.handleInput(e)}  />Cricket
                    </div>
                    <button type="button" className="btn btn-success mt-4" onClick={()=>this.submitHandle()}>Submit</button>

                    <table border="2">
                        <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // console.log(this.state.Record,"aaa")
                        }
                        {
                                 this.state.Record.map((item,index)=>{
                                // console.log(item,"iii")
                                return(
                                    <tr key={index}>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.hobby}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary" onClick={()=>this.handleEdit(index)}>Update</button>
                                            <button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                        </tbody>
                    </table>
                </form>
                {/*<Table dataSource={this.state.Record} columns={columns} />;*/}

            </div>
        )
    }

}

export default MyForm;