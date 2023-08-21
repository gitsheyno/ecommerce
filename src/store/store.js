import { configureStore } from "@reduxjs/toolkit";

// import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rooteReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { loggerMiddleware } from "./middleware/logger";
import thunk from "redux-thunk";

const persistConfigue = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfigue, rooteReducer);
// // const middleWares = [logger];`
// const middleWares = [
//   process.env.NODE_ENV === "development" && loggerMiddleware,
//   thunk,
// ].filter(Boolean);
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const composedEnhacers = compose(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhacers);

export const store = configureStore({
  reducer: persistedReducer,
  // middleWare: middleWares,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

export const persistor = persistStore(store);
