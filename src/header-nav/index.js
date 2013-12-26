/**
 * @fileoverview H5Test - HeaderNav.
 * @author 
 */
/**
 * KISSY.use('h5-test/header-nav/index',function(S,HeaderNav){
 *		new HeaderNav();
 * });
 */
KISSY.add(function(S,Base) {

	var HeaderNav = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			// 这里是初始参数和默认值
			A:{
				value:'abc'
			}
		}
	});

	return HeaderNav;
	
},{
	requires:['base']	
});
