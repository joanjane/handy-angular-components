export class HacImmutableHelper {
    static set<T>(obj: T, updatedProperties: any): T {
        return Object.assign({}, obj, updatedProperties);
    }
}