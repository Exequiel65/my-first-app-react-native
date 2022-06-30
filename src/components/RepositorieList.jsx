import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import axios from 'axios'
import RepositoriesItem from './RepositoriesItem'

export default function RepositorieList() {

  const [respositories, setRepositories] = useState(null);

  const fetchRepositories = async()=>{
    try {
      const response = await axios.get('https://aulavirtualnc.herokuapp.com/mat/getMateria')
      
      setRepositories(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, []);
  const repositoriesNodes = respositories ? respositories.data.materias.map(edge => edge) : []

  return (
    
    <FlatList 
        data={repositoriesNodes}
        renderItem={({item: repo})=>(
            <RepositoriesItem {...repo} />
        )}    
    ></FlatList>
  )
}
