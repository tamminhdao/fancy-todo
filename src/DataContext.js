import { createContext } from "react"
import { DataStore } from "./data-store"

const data = DataStore.retrieve()

const DataContext = createContext(data)

export default DataContext
