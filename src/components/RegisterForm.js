import React, { useState } from 'react';
const RegisterForm = props => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(state);
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    return(
        <div>
            <form>
                <label>First Name  </label>
                <input type="text" name="firstName" value={state.firstName} onChange={onChangeHandler}/>
                <br/>
                <label>Last Name  </label>
                <input type="text" name="lastName" value={state.lasttName} onChange={onChangeHandler}/>
                <br/>
                <label>Email  </label>
                <input type="email" name="email" value={state.email} onChange={onChangeHandler}/>
                <br/>
                <label>Password  </label>
                <input type="password" name="password" value={state.password} onChange={onChangeHandler}/>
                <br/>
                <label>Confirm Password  </label>
                <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={onChangeHandler}/>
            </form>
            <form>
                <p>Your From Data</p>
                <p>First Name: {state.firstName}</p>
                <p>Last Name: {state.lastName}</p>
                <p>Email: {state.email}</p>
                <p>Password: {state.password}</p>
                <p>Confirm Password: {state.confirmPassword}</p>
            </form>
        </div>
    );
}

export default RegisterForm;