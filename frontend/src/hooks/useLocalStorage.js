import {useEffect, useState} from 'react'
const PREFIX = 'chatrooms'

export default function useLocalStorage(key, init) {
   const prefixKey = PREFIX + key
   const[value, setValue] = useState(()=> {
       const jsonValue = localStorage.getItem(prefixKey)
       if (jsonValue!= null) return JSON.parse(jsonValue)
       if(typeof init === 'function') {
           return init()
       }
       else{
           return init
       }
   })
   useEffect(()=> {
       localStorage.setItem(prefixKey, JSON.stringify(value))
   }, [prefixKey, value])
   
   return [value, setValue]
}

