var app = new Vue({
	el:'#app',
	data:{
		goods:[
			{'name':'Apple苹果8 64G 黑色', 'img':'img/1.png', 'price':5288},
			{'name':'安耐晒 安热沙资生堂', 'img':'img/2.png','price':140.80},
			{'name':'韩版潮流手表女生石英腕表', 'img':'img/4.png', 'price':68},
			{'name':'国行sony索尼a6000微单相机', 'img':'img/5.png', 'price':3548}
		],
		total:0
	},
	filters:{
		ft:function(v){
			if(isNaN(v)){
				v = 0;
			}
			return v;
		},
		flg:function(v){
			if(isNaN(v)){
				v = 0;
			}
			v = v.toFixed(2);
			return v;
		}
	},
	methods:{
		change:function(n,item){
			if(!item.num){
				this.$set(item,'num',0);
			}
			if(n===0){
				if(item.num>0){
					item.num--;
				}
			}else{
				item.num++;
			}
			
		},
		check:function(item){
			if(!item.num){
				this.$set(item,'num',0);
			}
			if(!item.act){
			//if(typeof item.act === 'undefined'){
				this.$set(item,'act',false);
			}
			item.act = !item.act;
		}
	},
	computed:{
		totals:function(){
			var all = 0;
			for(var i in this.goods){
				if(this.goods[i].act){
					all += this.goods[i].num*this.goods[i].price;
				}
			}
			return all.toFixed(2);
		}
	}
})