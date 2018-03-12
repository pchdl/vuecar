//自适应
(function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/750*100;
	var header = document.querySelector('.header').clientHeight;
	var footer = document.querySelector('.footer').clientHeight;
	var body = document.documentElement.clientHeight;
	var carbox = document.querySelector('.carbox');
	carbox.style.height = body-header-footer+'px';
})();

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
		//点击数量增加或减少
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
		//勾选一个商品
		check:function(item){
			if(!item.num){
				this.$set(item,'num',0);
			}
			if(!item.act){
			//if(typeof item.act === 'undefined'){
				this.$set(item,'act',false);
			}
			item.act = !item.act;
		},
		
		//全选和反选
		checkall:function(){
			// console.log(this.checked)
			var tt = 0;
			for(var i in this.goods){
				var item = this.goods[i];
				if(!this.checked){//全选
					item.act = true;
				}else{//全不选
					item.act = false;
				}
			}
			console.log(this.goods);

			
		}
	},
	computed:{
		//计算总金额
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