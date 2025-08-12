let app = new Vue({
    el: `#app`,
    data: {
        answer: `Выбери ответ`,
        answer2: `Выбери ответ`,
        answer3: `Выбери ответ`
    
    },

    methods: {
        right() {
            this.answer = `Правильно`;
        },

        wrong() {
            this.answer = `Неправильно`;
        },

        test() {
            this.wrong();
           
        },

        button() {
            this.answer2 = `Неправильно`;
        },

        button4() {
            this.answer2 = `Правильно`;
        },
        

        button1() {
            this.button();
           
        },

      
        btn() {
            this.answer3 = `Неправильно`;
        },

        btn1() {
            this.answer3 = `Правильно`;
        },
        

        btn4() {
            this.btn();
            
        },
  

        
    }
    
});