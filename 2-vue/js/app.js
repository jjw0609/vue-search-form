import SearchModel from "./models/SearchModel.js";

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search();
        },

        onKeyup(e) {
          if(!this.query.length) this.resetForm();
        },

        onReset(e) {
            this.resetForm();
        },

        search() {
            SearchModel.list().then(data => {
                this.submitted = true;
                this.searchResult = data;
            })
        },

        resetForm(e) {
            this.query = '';
            this.submitted = false;
            this.searchResult = [];
        },
    }
})