import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })
        alert("You have signed up!")
        navigate("/signin")
    }

    return( <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded min-w-48  p-8">
            <Input reference={usernameRef} placeholder="username"/>
            <Input reference={passwordRef} placeholder="password"/>
            <div className="flex justify-center">
            <Button variant="primary" size="md" text="Sign Up" fullWidth={true} loading={false} onClick={signup}/>
            </div>
        </div>
    </div>)
}