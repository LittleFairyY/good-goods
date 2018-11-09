import { createStore } from "../libs/rudex/redux.min.js"
import rootRedux from "./reduces/index.js"
export default createStore(rootRedux)