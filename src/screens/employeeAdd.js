import React, {useRef} from 'react'

export default function EmployeeAdd() {
    var firstName = useRef()
    var lastName = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            fnm: firstName.current.value,
            lnm: lastName.current.value
        }

        console.log(data)
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                First Name: <input type='text' ref={firstName} placeholder='Enter First Name' /> <br/>
                Last Name: <input type='text' ref={lastName} placeholder='Enter Last Name' /> <br/>
                <input type='submit' value='Sign Up' />
            </form>
        </div>
    )
}