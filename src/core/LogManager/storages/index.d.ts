import { LocalStorageOptions, LocalStorage as LocalStorageImpl } from "./LocalStorage";
import { Storage } from "./Storage";
export { Storage };
/**
 * @enum {"LocalStorage"} PredefinedStorages
 * Predefined storages available for use in custom log managers:
 * @property {"LocalStorage"} LocalStorage - a storage that persist collected data between page reloads
 * @memberof Log
 */
export declare enum PredefinedStorages {
    LocalStorage = "LocalStorage"
}
/**
 * @typedef {object} StorageTypeOptions
 * @property {Log.PredefinedStorages} type a type of a predefined storage
 * @memberof Log
 */
declare type StorageTypeOptions = {
    type: PredefinedStorages;
};
/**
 * Options for predefined storages
 * @typedef {object} StorageConfigurableOptions
 * @mixes Log.StorageTypeOptions
 * @mixes Log.LocalStorageOptions
 * @memberof Log
 */
declare type StorageConfigurableOptions = StorageTypeOptions & LocalStorageOptions;
/**
 * Create a custom storage
 * @callback CreateStorage
 * @returns {Log.Storage}
 * @memberof Log
 */
declare type CreateStorage = () => Storage;
/**
 * A way to define a storage for a log manager
 * @typedef {Log.CreateStorage | Log.StorageConfigurableOptions} StorageConfig
 * @memberof Log
 */
export declare type StorageConfig = CreateStorage | StorageConfigurableOptions;
export declare const getStorage: (options: StorageConfigurableOptions) => LocalStorageImpl;
