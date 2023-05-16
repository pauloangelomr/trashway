import {configureStore} from "@reduxjs/toolkit";
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '@config/saga';
import user from "@store/user/userSlice";
import order from "@store/order/orderSlice";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user,
    order
  },
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;