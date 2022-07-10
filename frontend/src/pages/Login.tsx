import { useEffect, useRef } from 'react'
import { useAuth } from "../contexts/authGoogle";
import '../styles/App.css'

const loadScript = (src: any) =>
    new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve('Script already loaded')
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve('')
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })

export const Login = () => {
    const { handleSignOut, user, handleSignIn } = useAuth();

    const googleButton = useRef(null);

    useEffect(() => {
        const src = 'https://accounts.google.com/gsi/client'
        const id = "986928911189-58h6e220b7ofbdqjk7iiq07hpsj34421.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                google.accounts.id.initialize({
                    client_id: id,
                    callback: handleCredentialResponse,
                })
                google.accounts.id.renderButton(
                    googleButton.current,
                    { theme: 'outline', size: 'large' }
                )
            })
            .catch(console.error)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }, [])

    function handleCredentialResponse(response: any) {

        handleSignIn(response.credential);
    }

    return (
        <div className="Login">
            <h1 className="CustomH1">Faça login com Google</h1>
            <div ref={googleButton} className="GoogleButton"></div>
        </div>
    )
}
