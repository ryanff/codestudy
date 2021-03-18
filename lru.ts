/**
 * 基于一个双链表的数据结构，在没有满员的情况下，新来的 k-v 放在链表的头部，
 * 以后每次获取缓存中的 k-v 时就将该k-v移到最前面，缓存满的时候优先淘汰末尾的。
 * @class LRU
 */
class LruCache {
    private limit: number = 0;
    private storeMap: Map<any, any> = new Map();
    constructor(limit: number = 2){
        this.limit = limit;
    }

    public set(key: any, value: any){
        if (this.storeMap.has(key)) {
            this.storeMap.delete(key);
        }
        this.storeMap.set(key, value);
        while(this.storeMap.size > this.limit){
            const keys = this.storeMap.keys();
            this.storeMap.delete(keys.next().value);
        }
    }

    public get(key: any){
        const val = this.storeMap.get(key);
        if (typeof val === 'undefined') return -1;
        this.storeMap.delete(key);
        this.storeMap.set(key, val);
        return val;
    }
}