import React, { useState } from "react";
function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const[fetchData,setFetchData]=useState("")

  const myName = (event) => {
    setName(event.target.value);
    
  };
  const myEmail = (event) => {
    setEmail(event.target.value);
  };
  const myPhone = (event) => {
    setPhone(event.target.value);
  };
  const myAge = (event) => {
    setAge(event.target.value);
  };
  const myGender = (event) => {
    setGender(event.target.value);
  };
  const myHobbies = (checkValue,checked) =>{
    let isValid = checked;
    if(isValid){
        setHobbies((prevValue)=>{
            return [ ...prevValue , checkValue ];
        });
    }
    else{
        if(hobbies.includes(checkValue)){
            let newArray = hobbies.filter((val)=>{
                console.log("hiiii value", val , " ::: " ,val !== checkValue);
                return val !== checkValue;
            });
            setHobbies([...newArray])
        }
    }

}
  // const myHobbies = (event) => {
    // setHobbies([...hobbies,event.target.value]);
    // const arg= hobbies;
    // const arg1 = arg.indexOf(event.target.value);
    // if(arg.includes(event.target.value))
    // {
    //     arg.splice(arg1,1)
    //     setHobbies(arg)
    // }
    // else{
    //     arg.push(event.target.value)
    //     setHobbies(arg)
    // }
  // };
  const myCountry = (event) => {
    setCountry(event.target.value);
  };
  const myPassword = (event) => {
    setPassword(event.target.value);
  };
  const Data = (event) => {
    event.preventDefault();
       
    const infoData = {
      name: name,
      email:email,
      phone:phone,
      age:age,
      gender:gender,
      hobbies:hobbies,
      country:country,
      password:password,
    };  
    setFetchData(infoData)
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setGender("");
    setHobbies([])
    setPassword("");
    setCountry("");
    setPassword("");
  
  };
  props.onSetData(fetchData)

  return (
   <div>
      <form onSubmit={Data}>
        <div>
          <h2>TASK-2(Controlled)</h2>
          <div>
            <label>Name : </label>
            <input type="text" value={name} onChange={myName} />
          </div>
          <div>
            <label>Email : </label>
            <input type="email" value={email}  onChange={myEmail} />
          </div>
          <div>
            <label>Phone : </label>
            <input type="number" value={phone}  onChange={myPhone}  />
          </div>
          <div>
            <label>Age : </label>
            <input type="number" value={age} onChange={myAge} />  
          </div>
          <div onChange={myGender}>
            <label>Gender : </label>
            <input type="radio" name="gender" checked={gender==="Male"}  value="Male" />
            <label>Male</label>
            <input type="radio" name="gender"   checked={gender==="Female"} value="Female" />
            <label>Female</label>
          </div>
            <div  onChange={e => myHobbies(e.target.value, e.target.checked)}>
            <label>Hobbies : </label>
            <input type="checkbox" name="hobbies" checked={hobbies.includes('Cricket') ? true : false} value="Cricket"/>
            <label>Cricket</label>
            <input type="checkbox" name="hobbies" checked={hobbies.includes('Volleyball') ? true : false} value="Volleyball"/>
            <label>Volleyball</label>
            <input type="checkbox" name="hobbies" checked={hobbies.includes('Basketball') ? true : false} value="Basketball"/>
            <label>Basketball</label>
           </div>
          <div onChange={myCountry} >
            <label>Country : </label>
            <select id="country" name="country" value={country}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="London">London</option>
            </select>
          </div>
          <div>
            <label>Password : </label>
            <input type="password" value={password} onChange={myPassword} />
          </div>
          <button type="submit">Click me</button>
        </div>
      </form>
      <div>{`Name :${fetchData.name || ""}`}</div>
      <div>{`Email :${fetchData.email || ""}`}</div>
      <div>{`Phone :${fetchData.phone || ""}`}</div>
      <div>{`Age :${fetchData.age || ""}`}</div>
      <div>{`Gender :${fetchData.gender || ""}`}</div>
      <div>{`Hobbies :${fetchData.hobbies || ""}`}</div>
      <div>{`Country :${fetchData.country || ""}`}</div>
      <div>{`Password :${fetchData.password || ""}`}</div>
      </div>
   
  );
}

export default Form;
