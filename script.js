const {createApp} = Vue ;

createApp({
    data(){
        return {
            name : "salah-eddine",
            age  : 26,
            link:"https://www.google.com",
            employeeName:"",
            salary:0
        };
    },
    methods: {
        sayHi(name){
            return "good morning "+name
        },
        increment(){
            this.age++
        },
        testOnce(){
            console.log("once")
        },
        infoEmployee(){
            let emp = {
                n:this.employeeName,
                s:this.salary ,

            }
            console.log(emp)
        }

    }
}).mount("#app-root")