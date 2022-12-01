import {legacy_createStore} from "redux"
import { CartReducer } from "../Reducer/Reducer";

export const CartStore = legacy_createStore(CartReducer);