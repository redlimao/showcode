myApp.controller('tit1Ctrl',function($scope){
	$scope.title = '内置指令1';
	$scope.user = {
		email : ''
	};
	$scope.save = function(){
		alert("保存数据！");
	}
})

myApp.controller('tit2Ctrl',function($scope){
	$scope.title = '内置指令2';
	$scope.flavores = "可口可乐";
	$scope.says = function(name){
		alert(name);
	}
})

myApp.controller('tit3Ctrl',function($scope){
	$scope.title = '自定义指令';
	$scope.titles = "点击展开";
	$scope.text = "这里是内部的内容。";
})