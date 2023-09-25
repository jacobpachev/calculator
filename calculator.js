
new Vue({
	el: '#app',
	vuetify: new Vuetify(),
	data: function() {
		return {
			res: '',
			vis_res: '',
			past_res: '',
			pos: -200, 
			pos_ans: -200,
			submitted: false,
			res_len: ''
		}
    },
	methods: {
		place_num: function(n) {
			this.submitted = false;
			this.res = this.res + n;
			this.vis_res = this.res;
			this.past_res = this.res;
			var res_len = this.res.length*12-200;
			this.pos = this.pos < 0 ? res_len : this.overflow();
		},
		overflow() {

		},
		submit: function() {
				this.submitted = true;
				this.res = eval(this.res);
				
		},
		return_ans: function() {
				res = this.res;
				console.log(this.past_res.toString().length) ;
				var digits = Math.log(res) * Math.LOG10E + 1 | 0;
				this.pos = digits*12-200;
				this.pos_ans = (this.past_res.toString().length)*9-220;
				return(res);
		},
        clear: function() {
            this.vis_res = '';
            this.res = '';
            this.past_res = '';
        }
	}
})
