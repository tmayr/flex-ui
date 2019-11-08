import { GenericStoreEnhancer } from "redux";
import { History } from "history";
import { HistoryParams } from "./history";
/**
 * Applies Flex middleware to redux store
 * @example
 * const myReduxStore = createStore(
 *  reducers,
 *  compose(
 *    applyFlexMiddleware()
 *  )
 * );
 *
 * @example
 * import createMemoryHistory from "history/createMemoryHistory";
 * const history = createMemoryHistory();
 * const myReduxStore = createStore(
 *  reducers,
 *  compose(
 *    applyFlexMiddleware(history)
 *  )
 * );
 *
 * @param {History | HistoryType | HistoryParams} [arg] instance of History, type of a history (memory, browser) or parameters for getHistory() function
 * @category Core
 */
export declare const applyFlexMiddleware: (arg?: "memory" | History<any> | "browser" | HistoryParams) => GenericStoreEnhancer;
