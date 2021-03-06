import { GET_List, POST_Favorite, GET_Favorite } from "../services/book";

export default {
  namespace: "book",
  state: {
    query: [],
  },
  effects: {
    *GET_List({ payload, callback, loading }, { put, call }) {
      try {
        if (loading) {
          loading(true);
        }

        // 取得書籍列表
        const response = yield call(GET_List, payload);
        yield put({ type: "SAVE_BookList", payload: response });

        if (loading) {
          loading(false);
        }
        if (callback) {
          callback();
        }
      } catch (err) {
        console.log(err);
      }
    },

    *POST_Favorite({ payload, callback, loading }, { call }) {
      try {
        if (loading) {
          loading(true);
        }

        // 喜歡書籍
        yield call(POST_Favorite, payload);

        if (loading) {
          loading(false);
        }
        if (callback) {
          callback();
        }
      } catch (err) {
        console.log(err);
      }
    },

    *GET_Favorite({ payload, callback, loading }, { put, call }) {
      try {
        if (loading) {
          loading(true);
        }

        // 取得書籍列表
        const response = yield call(GET_Favorite, payload);
        yield put({ type: "SAVE_FavoriteList", payload: response });

        if (loading) {
          loading(false);
        }
        if (callback) {
          callback();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  reducers: {
    SAVE_BookList(state, { payload }) {
      return {
        ...state,
        bookList: payload,
      };
    },

    SAVE_FavoriteList(state, { payload }) {
      return {
        ...state,
        FavoriteList: payload,
      };
    },
  },
};
