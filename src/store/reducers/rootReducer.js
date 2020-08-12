//> Reducers
// Authentication
import authReducer from "./authReducer";
// Shop
//import spreadshirtReducer from "./spreadshirtReducer";

//> Redux
import { combineReducers } from "redux";

//> Firestore reducer
import { firestoreReducer } from "redux-firestore";

//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  /* Authentication */
  auth: authReducer,
  /* Spreadshirt */
  //shop: spreadshirtReducer,
});

export default rootReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
