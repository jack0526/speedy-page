import mitt from 'mitt';
import { reactive, getCurrentInstance } from 'vue';
export default class Speedy {
    constructor() {
        this.isInPage = false;
        this.events = mitt();
        this.store = reactive({});
        this.eventsStore = new Map();
        this.slots = getCurrentInstance()?.slots;
        this.emit = getCurrentInstance()?.emit;
        this.events.on('*', this.dispatchEvents.bind(this));
    }
    dispatchEvents(type, val) {
        const eventHandler = this.eventsStore.get(type);
        if (eventHandler) {
            eventHandler(val);
        }
    }
    // 设置事件
    setEvents(key, fn) {
        if (typeof key === 'object') {
            Object.keys(key).forEach(v => {
                this.eventsStore.set(v, key[v]);
            });
        }
        else {
            this.eventsStore.set(key, fn);
        }
    }
    // 设置事件
    on(key, fn) {
        if (typeof key === 'object') {
            Object.keys(key).forEach(v => {
                this.eventsStore.set(v, key[v]);
            });
        }
        else {
            this.eventsStore.set(key, fn);
        }
    }
    setInPage(val) {
        this.isInPage = val;
    }
    getInPage() {
        return this.isInPage;
    }
    clearEvents() {
        if (this.isInPage)
            return;
        this.eventsStore.clear();
        this.events.all.clear();
    }
    setStore(key, value) {
        if (typeof key === 'object') {
            Object.keys(key).forEach(v => {
                this.store[v] = key[v];
            });
        }
        else {
            this.store[key] = value;
        }
    }
    getStore(key) {
        if (key) {
            return this.store[key] || [];
        }
        return this.store;
    }
    // 此处为了复用page中的store,通过传值，达到引用调用,在setOptions中使用
    reuseStore(store) {
        this.store = store;
    }
    // 复用eventsStore
    reuseEventsStore(eventsStore) {
        this.eventsStore = eventsStore;
    }
}
//# sourceMappingURL=Speedy.js.map