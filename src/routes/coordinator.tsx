import { NavigateFunction } from "react-router-dom"

export const goToMainPage = (navigate: NavigateFunction) => {
   navigate("/")
}

export const goToFavoritesPage = (navigate: NavigateFunction) => {
    navigate("/favorites")
 }

 export const goToDetailsPage = (navigate: NavigateFunction, id:string) => {
    navigate(`/details/${id}`)
 }

 export const goBack = (navigate: NavigateFunction) => {
    navigate(-1)
 }