class ContentManager {
    constructor({state, setState} = {}) {
        this.state = state;
        this.setState = setState;
    }

    getUpdateCallback(id){
        return (newValue) => {
            var newState = this.state.map((item) => {
                if(item.id === id) {
                    item.setValue(newValue);
                }
                return item;
            });
            this.setState(newState);
        }
    }

    getChangeNameCallback(id){
        return (newValue) => {
            var newState = this.state.map((item) => {
                if(item.id === id) {
                    item.setName(newValue);
                }
                return item;
            });
            this.setState(newState);
        }
    }

    getItem(id) {
        for(let idx in this.state){
            if(this.state[idx].id === id) {
                return this.state[idx];
            }
        }
    }

    sumByType(type) {
        var sum = 0;
        for(let idx in this.state) {
            if(this.state[idx].type === type && !isNaN(parseFloat(this.state[idx].value))) {
                sum += parseFloat(this.state[idx].value);
            }
        }
        return sum
    }

    filterByType(type) {
        return this.state.filter(item => item.type === type);
    }

}

export default ContentManager;