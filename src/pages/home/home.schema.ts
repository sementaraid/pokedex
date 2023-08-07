import { gql } from "../../lib/graphql/gql";

export const GET_POKEMON_LIST = gql(`
  query GetAllPokemon($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      abilities {
        first {
          name
        }
      }
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      forme
      formeLetter
      gender {
        male
        female
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      otherFormes
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
      mythical
      legendary
    }
  }
`)