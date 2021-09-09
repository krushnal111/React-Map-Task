import React, { Component } from 'react'
export class Display extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef('');
        this.email=React.createRef('');
        this.phone=React.createRef('');
        this.age=React.createRef('');
        this.gender=React.createRef('');
        this.hobbies=React.createRef('');
        this.country=React.createRef('');
        this.password=React.createRef('');
        this.formRef=React.createRef('')

        this.state={
            name:"",
            email:"",
            phone:"",
            age:"",
            gender:"",
            hobbies:"",
            country:"",
            password:"",
            data:"",
            data1:[],
        }
      }
      handleSubmit(event) {
        event.preventDefault();
          this.setState({
            name:this.name.current.value,
            email:this.email.current.value,
            phone:this.phone.current.value,
            age:this.age.current.value,
            gender:this.state.data,
            hobbies:this.state.data1 && this.state.data1.join(' '),
            country:this.country.current.value,
            password:this.password.current.value,
          })

          this.formRef.current.reset()
      }
      onChangeHobbies(event){
        const arg= this.state.data1;
    const arg1 = arg.indexOf(event.target.value);
    if(arg.includes(event.target.value))
    {
        arg.splice(arg1,1)
        this.setState({data1:arg})
    }
    else{
        arg.push(event.target.value)
        this.setState({data1:arg})
    }
      }
      render() {
        return (
            <div>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div><h2><b>Task-2(Uncontrolled)</b></h2></div>
          <div>
            <label>
              Name:
              <input type="text" ref={this.name} />
            </label></div>
            <div>
            <label>
              Email:
              <input type="email" ref={this.email} />
            </label>
            </div>
            <div>
            <label>
              Phone :
              <input type="tel" name="telephone" pattern="[0-9]{10}" ref={this.phone} />
            </label>
            </div>
            <div>
            <label>
              Age :
              <input type="number" ref={this.age} />
            </label>
            </div>
            <div >
            <div onChange={e=>this.setState({data:e.target.value})}>
            <label>Gender : </label>
            <input type="radio" name="gender" defaultValue="Male" />
            <label>Male</label>
            <input type="radio" name="gender" defaultValue="Female"   />
            <label>Female</label>
             </div>
             </div>
                  
             <div onChange={e=>this.onChangeHobbies(e)}>
            <label>Hobbies : </label>
            <input type="checkbox" name="hobbies" value="Cricket" />
             <label>Cricket</label>
             <input type="checkbox" name="hobbies" value="Volleyball"/>
             <label>Volleyball</label>
             <input type="checkbox" name="hobbies" value="Basketball"/>
             <label>Basketball</label>
            </div>
            <div>
             <label>Country : </label>
             <select id="country" name="country" ref={this.country  }>
             <option value="India">India</option>
             <option value="USA">USA</option>
             <option value="Canada">Canada</option>
            <option value="London">London</option>
            </select>
           </div>
           <div>
             <label>Password : </label>
             <input type="password"  ref={this.password} />
           </div>      
            <input type="submit" value="Submit" />
          </form>
          <div>{this.state.name}</div>
          <div>{this.state.email}</div>
          <div>{this.state.phone}</div>
          <div>{this.state.age}</div>
          <div>{this.state.gender}</div>
          <div>{this.state.hobbies}</div>
         <div>{this.state.country}</div>
         <div>{this.state.password}</div>
          </div>
        );
      }
}

export default Display
