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
		total:0,
		checkedall:false
	},
	filters:{
		ft:function(v,n){//v为默认的要过滤的值，n传过来的参数
			if(isNaN(v)){
				v = 0;
			}
			if(n===1){
				v = v.toFixed(2);
			}
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
			// if(!item.act){
			if(typeof item.act === 'undefined'){
				this.$set(item,'act',false);
			}
			item.act = !item.act;
		},
		
		//全选和反选
		checkall:function(e){
			var that = this;
			var flag = e.currentTarget.checked;
			this.goods.forEach( function(v, i) {
				if(typeof v.act === 'undefined'){that.$set(v,'act',flag)}
				v.act = flag;
				if(!v.num){that.$set(v,'num',1)}
			});
		}
	},
	computed:{
		//计算总金额
		totals:function(){
			var all = 0;
			var ff = 1;
			for(var i in this.goods){
				var item = this.goods[i];
				if(item.act){
					if(!item.num){
						this.$set(item,'num',0);
					}
					all += item.num*item.price;
				}else{
					this.checkedall = false;//取消全选
					ff = 0;
				}
			}
			if(ff===1){this.checkedall = true;}//如果上面全部勾选上，则响应全选
			return all.toFixed(2);

		}
	}
})