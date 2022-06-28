import React from 'react'
import { View, Text, FlatList } from 'react-native'
import repositories from '../data/repositories'
import RepositoriesItem from './RepositoriesItem'
export default function RepositorieList() {
  return (
    <FlatList 
        data={repositories}
        renderItem={({item: repo})=>(
            <RepositoriesItem {...repo} />
        )}    
    ></FlatList>
  )
}
