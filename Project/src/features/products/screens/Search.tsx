import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { getJsonData, storeData } from '../../../app/asyncStorage'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import BaseHeaderText from '../../../components/base/BaseHeaderText'
import { MainStackProps } from '../../../navigation/MainStack'
import ProductSearchBar from '../components/ProductSearchBar'
import SearchHistoryItem from '../components/SearchHistoryItem'
import SearchProductCard from '../components/SearchProductCard'
import { Product } from '../data/Product'
import { fetchProductsByName } from '../slice/ProductsSlice'

const SEARCH_HISTORY = 'SEARCH_HISTORY'

type Props = StackScreenProps<MainStackProps, 'Search'>

const Search = ({navigation}: Props) => {
    const data = useAppSelector(state => state.products);
    const dispatch = useAppDispatch()

    const [input, setInput] = useState("")
    const [searchHistory, setSearchHistory] = useState<string[]>([])
    const [isSearchBarFocused, setSearchBarFocus] = useState(true)

    const getSeacrhHistory = async() => {
        const searchHistory = await getJsonData(SEARCH_HISTORY)
        if (searchHistory !== undefined) {
            setSearchHistory(searchHistory)
        }
    }

    const sortSearchHistory = (searchItem: string) => {
        const position = searchHistory.indexOf(searchItem)
        if(position !== 0) {
            searchHistory.splice(position, 1)
            searchHistory.unshift(searchItem)
        }
    }

    const updateSearchHistory = (searchItem: string) => {
        console.log("SEARCH: ", searchHistory)
        if(!searchHistory.includes(searchItem)) {
            searchHistory.unshift(searchItem)
            if(searchHistory.length > 20) {
                searchHistory.pop()
            }
        } else {
            sortSearchHistory(searchItem)
        }
        storeData(SEARCH_HISTORY, searchHistory)
    }

    const search = (searchItem: string | undefined) => {
        if(searchItem !== undefined) {
            if(searchItem !== '') {
                updateSearchHistory(searchItem)
            }
            setSearchBarFocus(false)
            dispatch(fetchProductsByName(searchItem))
        }
    }

    const onTextChange = (value: string) => {
        setInput(value)
        if(value === "") {
            setSearchBarFocus(true)
        }
    }
    
    const onHistoryItemPressed = (historyItem: string) => {
        if(historyItem !== "") {
        setInput(historyItem)
        search(historyItem)
        }
    }

    const navigateToProductDetail = (product: Product) => {
        navigation.navigate('ProductDetail', {product});
      }

    useEffect(() => {
        getSeacrhHistory()
    }, [])

  return (
    <View>
      <ProductSearchBar 
        input={input} 
        onChageText={value => {onTextChange(value)}} 
        onSearchIconPress={input => {search(input)}}/>

      { isSearchBarFocused? 
        (
            <FlatList style={styles.container} data={searchHistory} renderItem={ ({item}) => (
                <SearchHistoryItem
                    text={item}
                    onPress={() => onHistoryItemPressed(item)}/>
            )}/>
        ) : (
             !data.loading ?
            <FlatList data={data.products} renderItem={ ({item}) => (
                <SearchProductCard product= {item} 
                onPress={() => navigateToProductDetail(item)}/>
            )}/> : <BaseHeaderText text='Loading'/>
            
        )
      }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})