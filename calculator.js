
new Vue({
	el: '#app',
	vuetify: new Vuetify(),
	data: function() {
		return {
			data: [],
			pos: -200
			
		}
    },
	methods: {
		place_num: function(n) {
			this.data.push(n);
			this.pos += 10;
			console.log(this.pos);
		}
	}
})
