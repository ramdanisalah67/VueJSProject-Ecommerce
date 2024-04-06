const {createApp} = Vue ;


const first_component = {
    template : `
    <h2>welcome {{username}} to you first component</h2>
        `,

        data(){
            return {
                username:"ramdani salah-eddine"
            }
        }
}


const vue_1 = createApp({
    
    data(){
        return {
        
        };
    },
    components: {
        first_component,
    }
  
}).mount("#app-root-1")
