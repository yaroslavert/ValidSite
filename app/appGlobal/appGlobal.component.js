class AppGlobalController {
    constructor() {
        this.$onInit = () => {
            this.ArrayContry=[
                {"name":"Україна", "value":"+380","min":13},
                {"name":"рашка", "value":"+7","min":12},
                {"name":"Бульба", "value":"+375","min":13}
            ];
            this.selectContry = this.ArrayContry[0];
            this.defaultValueCountry = angular.copy(this.selectContry).value;
            this.test = 'test';
        }
        this.removeTagOnBackspace = (e) => {
            if(e.keyCode === 8){
                if((this.selectContry.value.length <= this.defaultValueCountry.length)){
                    e.preventDefault();
                    return;
                } else if(this.selectContry.value.length > this.defaultValueCountry.length) {
                    if (e.target.selectionStart === this.defaultValueCountry.length && e.target.selectionEnd === this.defaultValueCountry.length) {
                        e.preventDefault();
                    } else if (e.target.selectionStart < this.defaultValueCountry.length){
                        e.preventDefault();
                    }    
                }
            }
            else if (e.keyCode === 37 || e.keyCode === 39) {
            }
            else {
                if(e.target.selectionStart < this.defaultValueCountry.length){
                    e.preventDefault();
                }
            }
        }
        this.emitCountry = () => {
            this.defaultValueCountry = angular.copy(this.selectContry).value;
        }

    }
  }
  
export const AppGlobal = {
    template: require('./appGlobal.template.html'),
    controller: AppGlobalController,
    bindings: {}
};
  

