import { reactive } from 'vue';
class SpeedyStore {
    constructor() {
        this.state = reactive({});
    }
    setStore(key, value) {
        this.state[key] = value;
    }
    getStore(key) {
        return this.state[key];
    }
}
export default SpeedyStore;
//# sourceMappingURL=index.js.map