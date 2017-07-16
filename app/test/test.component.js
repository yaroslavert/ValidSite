angular.module('testGlobal')
       .component('testGlobal',{
           templateUrl: "./app/test/test.template.html",
           require:{
               model: "ngModel"
           },
           controller: function(){
                this.$onInit = ()=>{
                    this.value = 'qwe';
                    this.model.$render = ()=>{
                        this.value = this.model.$viewValue;
                    }
                } 
           }
       }) 


    //    require: {
                // model: "ngModel"
        //    },