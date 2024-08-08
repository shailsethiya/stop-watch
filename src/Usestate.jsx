import {useState} from 'react'

const Usestate = () => {
    const[userDetails, setUserDetails] = useState({
        "firstName": "",
        "lastName": "",
        "email": ""
    })

    const handleUserDetails = (e) => {
        const {name, value} = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("userDetails===============", userDetails)
    }

  return (
    <>
    <form onClick={handleSubmit}>
        <input type="text" placeholder='firstname' name="firstName" onChange={handleUserDetails} />
        <input type="text" placeholder='lastName' name="lastName" onChange={handleUserDetails} />
        <input type="email" placeholder='email' name="email" onChange={handleUserDetails} />
        <button type="submit">submit</button>
    </form>
    </>
  )
}

export default Usestate;
