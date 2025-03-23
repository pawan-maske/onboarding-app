import React from 'react'

function useGetName({name}) {
    const surname='maske'
    const getFullName=({s=surname})=>{
        return name+s
    }

  return [name, getFullName]
}

export default useGetName
