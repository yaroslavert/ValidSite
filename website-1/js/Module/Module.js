var app=angular.module('app', []);

 app.directive("orderedList", function () {
      return function (scope,element,attributes) {
      	
      	
      	element.text('some text');
      	console.log(element.text());
      	element.attr('maxlength',scope.sel.value.length+9);
      	var watcherFunction=function(watchScope){
      		var value;
      		var el=scope[attributes["orderedList"]];
      		console.log(scope.example.text);
      		/*if(!el){
      			scope.example.text=scope.sel.value;
      		}*/
      		/*
      		if(scope.sel.Contru==='рашка'){
      		  value=scope.example.text[0]+scope.example.text[1];
              
              if(value!='+7'){
              	scope.example.text=scope.sel.value;
              }
              return element.attr('maxlength',scope.sel.value.length+8);
            
      		} else if(scope.sel.Contru==='Україна') {
      			value=scope.example.text[0]+scope.example.text[1]+scope.example.text[2]+scope.example.text[3];
      			if(value!='+380'){
              	scope.example.text=scope.sel.value;
              }
      		  return element.attr('maxlength',scope.sel.value.length+9);
      		} else if(scope.sel.Contru==='Бульба'){
      			value=scope.example.text[0]+scope.example.text[1]+scope.example.text[2]+scope.example.text[3];
      			if(value!='+375'){
              	scope.example.text=scope.sel.value;
              }
      		  return element.attr('maxlength',scope.sel.value.length+9);
      		}*/
          }
 
          scope.$watch(watcherFunction,function(newValue,oldvalue){
            element.text(newValue);
          });
  }
});


