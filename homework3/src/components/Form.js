import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange =({target:{value, name}}) => {
        if (errorMessage){
            setErrorMessage("");
        }
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleSubmit= (event) => {
        event.preventDefault();

        if (form.email === "" || form.password === "" || form.firstName === "" || form.lastName === "" ) {
            setErrorMessage("You need to fill all fields!")
            return;
        }
        if (!form.email.includes("@")) {
            setErrorMessage("Please, enter valid email");
            return;
        }
        if (!form.password.match(/^(?=.*\d)(?=.*[A-Z]).{6,10}$/)) {
            setErrorMessage("Password must contain at least 6 characters, including 1 uppercase letter and 1 digit")
            return;
        }
        if (!form.firstName.match(/^[A-Za-zА-Яа-я]{2,}$/)) {
            setErrorMessage("Field first name must contain at least 2 characters and should not contain numbers")
            return;
        }
        if (!form.lastName.match(/^[A-Za-zА-Яа-я]{2,}$/)) {
            setErrorMessage("Field last name must contain at least 2 characters and should not contain numbers")
            return;
        }
    };

    const handleReset= ()=>{
        setForm({
            email:"",
            password:"",
            firstName:"",
            lastName:"",
        });
    };

    return(
        <form onSubmit={handleSubmit} noValidate className='form'>
            <fieldset>
                <legend>User Form:</legend>

                <div>
                    <label forHtml="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label forHtml="email">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label forHtml="email">First name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label forHtml="email">Last name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    /> 
                </div>

                {errorMessage ? <div className='error'>{errorMessage}</div>: null}

                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </fieldset>
        </form>
    )
}

export default Form