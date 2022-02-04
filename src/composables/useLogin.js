import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
    error.value = null
    try{
        // Logining the user
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res
    } catch(err){
        // Setting an error message if there is one
        console.log(err.value)
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return {error, login}
}

export default useLogin