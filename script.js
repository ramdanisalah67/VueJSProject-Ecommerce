const {createApp} = Vue ;

const vue_1 = createApp({
    data(){
        return {
            username:"salah-eddine",
            a:0,
            b:0,
            myColor:"",
            num1:0,
            num2:0,
            s:0,
            students:[
                {
                    id:1,
                    name:"salah-eddine",
                    technologies:["java","python","JavaScript"]
                    
                },
                {
                    id:2,
                    name:"ahmed",
                    technologies:["c++","AI","Flutter"]

                },
                 {
                    id:3,
                    name:"omar",
                    technologies:["Symfony","SpringBoot","Kotlin"]

                },

            ]
        };
    },
    methods: {
        calc(){
            this.s = this.num1 + this.num2   
       }
    },
    computed: {
        incrementA(){
            console.log("A")
           return this.a*2 ;
         },
    
         incrementB(){
            console.log("B")
            return this.b*2 ;
    
         },
        
    }
}).mount("#app-root-1")

const vue_2 = createApp({


    data(){
        return {
            username:"ahmed"
        }
    },
    methods :{

        changeUsernameOfVue1(){
            vue_1.username = "user1"
            console.log("vue_1 updated")
        },
        checkRefs(){
            console.log(this.$refs.studentSalary.value)
        }
    }

}).mount("#app-root-2")