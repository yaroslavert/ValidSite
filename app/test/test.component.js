class testGlobalController{
    constructor(){
        this.$onInit = ()=>{
            this.value = 'qwe';
            this.model.$render = ()=>{
                this.value = this.model.$viewValue;
            }
        }    
    }
}

export const testGlobal = {
    template: require('./test.template.html'),
    controller: testGlobalController,
    require:{
        model: "ngModel"
    },
    bindings: {}
}