var app = new Vue({
	el: "#app",
	data: {
		city: '',
		weatherList: []
	},
	methods: {
		enter: function(){
			var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
			.then(function(response){
				that.weatherList = response.data.data.forecast;
				console.log(that.weatherList)
			})
			.catch(function(err){ })
		},
		search: function(){
			this.enter();
		}
	}
})