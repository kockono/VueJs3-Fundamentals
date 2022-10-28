// Tenemos que especificar en donde queremos renderizar nuestra apliación
const quotes = [
    {quote: 'Hola 1'},
    {quote: 'Hola 2'},
    {quote: 'Hola 4'},
    {quote: 'Hola 3'},
    {quote: 'Hola 6'},
]
const app = Vue.createApp({

    // template: `
    // <h1> Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `,

    data() {
        return {
            message:'Hola Mundo',
            author: 'Nicolas Herrera',
            frases: quotes,
            newQuote: 'Wow'
        }
    },
    methods: { 
        changeQuote(event) {
            console.log( 'Hola Mudno', event )
            this.author = 'Fernando Herrera'
            if(event.charCode !== 13 ){ }
            this.quotes.unshift({
                quotes: this.newQuote,
            })    
            this.capitalize()
        },
        capitalize() {
            this.message = this.message.toUpperCase()
        }
    },
    // watch: {},
    
    // setup() {}
})

app.mount('#myApp')