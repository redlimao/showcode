//缓存模板
// myApp.run(function($templateCache){
// 	$templateCache.put('hello.html','<div>Heeee</div>');
// })

//最基本的指令
myApp.directive('hello',function(){
	return {
		restrict : 'AE',
		// templateUrl : 'tpls/1learn.html',
		// template : '<div>hello angular!!</div>',
		// template : $templateCache.get('hello.html'),
		// replace : true
		transclude : true,//变换
		template :'<div>Hello Everyone!<div ng-transclude></div></div>'
		//把嵌套的内容存放到ng-transclude中
	}
})

myApp.directive('loader',function(){
	return {
		restrict : 'AE',
		link : function(scope,element,attr){
			element.bind('click',function(){
				// scope.loadDate();
				scope.$apply(attr.howtoload);
			})
		}
	}
})

myApp.directive('clicker',function(){
	return {
		restrict : 'AE',
		link : function(scope,element,attr){
			element.bind('click',function(){
				scope.$apply(attr.dataup);
			})
		}
	}
})

myApp.directive('hell',function(){
	return {
		restrict : 'AE',
		scope : {},
		template : '<div><input type="text" ng-model="username">{{username}}</div>',
		replace : true
	}
})
myApp.directive('drink',function(){
	return {
		restrict : 'AE',
		scope : {
			flavor : '='
		},
		template : '<input type="text" ng-model="flavor" />'
		// link : function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
})

myApp.directive('greet',function(){
	return {
		restrict : "AE",
		scope : {
			greet : '&'
		},
		template : '<input type="text" ng-model="userName" /><br/>'+
				   '<button class="btn btn-default" ng-click="greet({name:userName})">点击</button><br/>'
	}
})






