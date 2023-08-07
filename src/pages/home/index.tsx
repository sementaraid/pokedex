import { Fragment, useCallback, useEffect } from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "./home.schema";
import { Loading } from "./home.loading";
import { View } from "./home.view";
import { Error } from "./home.error";
import { useHomeHooks } from "./home.hooks";

export function Home(){
  const { handleScroll } = useHomeHooks();
  const {loading, data, error, fetchMore} = useQuery(
    GET_POKEMON_LIST as DocumentNode,
    {
      variables:{
        offset: 0,
        take: 20
      }
    } 
  )

  const handleFetchMore = useCallback( () => {
    if(data && !loading && fetchMore){
      fetchMore({
        variables:{
          offset: data.getAllPokemon.length,
          take: 20
        },
        updateQuery: (previous, {fetchMoreResult}) => {
          if(!fetchMoreResult) return previous; 
          return {
            getAllPokemon: [
              ...previous.getAllPokemon, 
              ...fetchMoreResult.getAllPokemon
            ],
          };
        }
      })
    }
  }, [data, loading, fetchMore])


  useEffect(() => {
    const scrollListener = () => handleScroll(handleFetchMore)
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[handleFetchMore, handleScroll])
  
  
  return (
    <Fragment>
      {loading && <Loading/>}
      {data && <View data={data.getAllPokemon}/>}
      {error && <Error/>}
    </Fragment>
  )
}