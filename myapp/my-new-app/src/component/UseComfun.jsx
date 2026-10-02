import React, { useState } from 'react';

const MyFormcom = () => {
    // 1. Initialized term as false instead of ""
    const [user, setUser] = useState({
        uname: "",
        upass: "",
        term: false 
    });

    const inputchangehandler = (event) => {
        const { type, name, value, checked } = event.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    };

    const checkData = (event) => {
        event.preventDefault(); // Prevents page reload

        if (user.uname === "") {
            window.alert("User name is Required"); 
            return false;
        }

        // 2. FIXED Regex: Replaced the closing ')' with '}' and used a regex literal
        if (!user.uname.match(/^[a-zA-Z ]{3,20}$/)) {
            window.alert("User name must contain characters min-3 max-20");
            return false;
        }

        if (user.upass === "") {
            window.alert("Password is Required"); 
            return false;
        }

        if (!user.term) {
            window.alert("Please Accept Terms and Conditions");
            return false;
        }   

        window.alert("Form Submitted Successfully:\n" + JSON.stringify(user));
    };

    return (
        <div>
            <h2>This is a form component</h2>
            {/* 3. Added onSubmit={checkData} to trigger your validation */}
            <form onSubmit={checkData}>
                
                <label className='form-label'>Enter your Name: </label><br />
                {/* 4. Fixed value={user.name} to value={user.uname} */}
                <input type='text' name='uname' onChange={inputchangehandler} value={user.uname} /><br />
                
                <label className='form-label'>Enter Password: </label><br />
                {/* Changed type to 'password' so characters are hidden */}
                <input type='password' name="upass" onChange={inputchangehandler} value={user.upass} /><br />
                
                <label className='form-label mt-2'>
                    <input type='checkbox' name='term' onChange={inputchangehandler} checked={user.term} /> I Agree to Terms and Cond 
                </label><br />
                
                <button type='submit' className='btn btn-success btn-sm mt-2'>Submit</button>
                {/* 5. Removed the extra </form> tag that was here */}
            </form>
        </div>
    );
};

export default MyFormcom;