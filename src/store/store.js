import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rooteReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middleware/logger";
import thunk from "redux-thunk";

const persistConfigue = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfigue, rooteReducer);
// const middleWares = [logger];`
const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddleware,
  thunk,
].filter(Boolean);

const composedEnhacers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhacers);

export const persistor = persistStore(store);
