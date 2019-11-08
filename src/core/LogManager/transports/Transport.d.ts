/**
 * A base class to inherit from when creating a transport class for a specific domain.
 * Transport's goal is to deliver data formatted by a formatter to a recipient.
 * @memberof Log
 */
export declare abstract class Transport {
    /**
     * Provide data to a recipient
     * @method flush
     * @memberof Log.Transport
     * @instance
     */
    abstract flush(data: any): any;
}
