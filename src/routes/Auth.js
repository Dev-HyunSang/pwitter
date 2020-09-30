import React, {useState} from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;
        // TODO: Email, Password Value
        if (name === "Email"){
            setEmail(value);
        } else if (name ==="Passwrod"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="Email"
                    type="text"
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={onChange}/>
                <input 
                    name="Password"
                    type="password"
                    placeholder="Password"
                    required 
                    value={password} 
                    onChange={onChange}/>
                <input type="submit" value="Log In"/>
            </form> 
            <div>
                <button type="button">Continue with Google</button>
                <button type="button">Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;