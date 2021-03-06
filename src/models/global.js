import { routerRedux } from "dva/router";

export default {
  namespace: "global",
  state: {},
  subscriptions: {},
  effects: {
    *goToRoute({ payload }, { put }) {
      try {
        yield put(routerRedux.push(payload));
      } catch (error) {
        console.log(error);
      }
    },
  },
  reducers: {},
};
