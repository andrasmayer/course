import React, { useState, useEffect  } from 'react';

export function Login() {

    const [userName,setUserName] = useState("");
    const [passWord,setPassWord] = useState("");
    const [loggedUser,setLoggedUser] = useState('{"id":null,"name":null}');

    let userToken = localStorage.getItem("userToken");

    if (userToken  === null ){
        userToken = {id:null,name:null};
        localStorage.setItem("userToken",JSON.stringify(userToken))
    } 

   userToken = JSON.parse(userToken);



    const user = {id:1,name:"admin",password:"admin"};

    const setLogin = (e) =>{
     localStorage.setItem("userToken",JSON.stringify(e))
     setLoggedUser(e);
     userToken=e;
    }

    const loginAttempt = () =>{

            if( userName === user.name && passWord === user.password ){
                setLogin(user);

            }
    }

    const userNameHandler = (e) =>{ setUserName(e.target.value)  }
    const passWordHandler = (e) =>{ setPassWord(e.target.value)  }



    return (
        <div>
            <div>Login page</div>

{
 userToken.id === null ? "Nem vagyok belépve": "Be vagyok lépve"



}


            <form onSubmit={ e=>{e.preventDefault();loginAttempt()} }>
                <section>
                    <div>
                        <label>Username</label>
                    </div>
                    <div>
                        <input onKeyUp={ e=>{ userNameHandler(e)}}/>
                    </div>
                </section>
                <section>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="password"  onKeyUp={ e=>{ passWordHandler(e)}}/>
                    </div>
                </section>     
                <div>
                    <button>Login</button>
                </div>           
            </form>
        </div>
    )

}

//export default Lesson_1;