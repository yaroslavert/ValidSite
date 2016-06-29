app.controller("appCtrl",function($scope){
   $scope.regex = '[a-z0-9A-ZА-Яа-я]+';
   $scope.regex1 = '[a-zA-ZА-Яа-я]+';
   $scope.regex2 = '[a-z0-9A-ZА-Яа-я]+';
   $scope.regex3='\b\w+@\w+\.\w+\b';
   $scope.regex4='\\+\\d+';
   $scope.json=[
    {"Contru":"Україна", "value":"+380","min":13},
    {"Contru":"рашка", "value":"+7","min":12},
    {"Contru":"Бульба", "value":"+375","min":13}
   ];   
    // $scope.sel={"Contru":"Україна", "value":"+380","min":13};
    // $scope.example = {
    //     text: $scope.sel.value
    // };
    $scope.func=function () {

      	if($scope.user.password===$scope.user.rebutpassword){ 	
   	 return true;
   	}
   	return false;
   }
   $scope.func1=function (el) {
     $scope.phone = $scope.sel.value;
   }
    $scope.removeTagOnBackspace = function (event) {
      console.log($scope.phone.length);
		if (event.keyCode === 8 && $scope.phone.length == $scope.sel.value.length) {
			       event.preventDefault();
			   }
	};
   $scope.OneC
   /*
   $scope.func2=function (el,el1) {
   
    if(!el){
    	$scope.example.text=$scope.sel.value;
    }else{

    	
    }
   }
*/

 
});
/*  if(angular.isArray(data)){
      var e=angular.element("<ul>");
      element.append(e);
       for(var i=0; i<data.length; i++){
      
      (function(){
          var item=angular.element('<li>');
          e.append(item);
          var index=i;

          var watcherFunction=function(watchScope){
              return watchScope.$eval(expression,data[index]);
          }
 
          scope.$watch(watcherFunction,function(newValue,oldvalue){
            item.text(newValue);
          });
      }());
      }
    }*/