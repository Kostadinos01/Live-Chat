import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)

const signUp = async (email, password, displayName) => {
    error.value = null

    try{
      // Creating a new user  
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      // In case we don't get a response
      if(!res) {
          throw new Error('Could not complete the SignUp')
      }
      // Updating the users profile
      await res.user.updateProfile({displayName})
      error.value = null

      return res

      // Catching the error if there is one
    } catch(err){
       console.log(err.message)
       error.value = err.message
    }
}

const useSignUp = () => {
    return {error, signUp}
}

export default useSignUp