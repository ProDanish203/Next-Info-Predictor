import axios from 'axios'
import React from 'react'

const getAge = async (name: string) => {
    const {data} = await axios.get(`https://api.agify.io/?name=${name}`) 
    return data.age;
}

const getGender = async (name: string) => {
    const {data} = await axios.get(`https://api.genderize.io/?name=${name}`) 
    return data.gender;
}

const getCountry = async (name: string) => {
    const {data} = await axios.get(`https://api.nationalize.io/?name=${name}`) 
    return data.country;
}

interface Params{
    params: {name: string}
}

const Name = async ({params}: Params) => {
    const {name} = params;
    const age = await getAge(name)
    const gender = await getGender(name)
    const country = await getCountry(name)

  return (
    <>
    <div className="flex items-center justify-center min-h-[100vh] max-w-[1000px] w-full mx-auto">
        <form
        className="bg-white px-4 py-5 rounded-md shadow-md max-w-[400px] w-full ">
          <p className="text-md">Name: {name}</p>
          <p className="text-md">Age: {age}</p>
          <p className="text-md">Gender: {gender}</p>
          <p className="text-md">Country: {country[0]?.country_id}</p>
        </form>
      </div>
    </>
  )
}

export default Name;