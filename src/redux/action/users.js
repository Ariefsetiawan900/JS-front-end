import Axios from 'axios'
import { Link } from 'react-dom'
import { useHistory } from 'react-router-dom'

const URL_STRING = "/api/v1/user/"

export const register = (data, props) => {
    return {
        type: "REGISTER",
        payload: Axios.post(`${URL_STRING}register`, data)
        .then(result => {
            if (result.status === 200) {
                alert("Register Success")
                try {
                    props.history.push('/login')
                } catch (error) {
                    console.log('a shit just happened')
                }
            }
        }).catch(error => {
            console.log(error)
        })

    }
}

export const login = (data, props) => {

    return {
        type: "LOGIN",
        payload: Axios.post(`${URL_STRING}login`, data)
            .then(res => {
                if (res.status === 200) {
                    alert("Sukses Register")
                    try {
                        localStorage.setItem('token', JSON.stringify(res.data.result.token))
                        props.history.push('/home')
                    } catch (err) {
                        console.log("Something's wrong")
                    }
                }
            }).catch(err => {
                alert("Your email/ password is wrong")
            })
    }
}