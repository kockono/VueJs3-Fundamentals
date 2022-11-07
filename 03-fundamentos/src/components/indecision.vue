<template>
  <div >
    <div class="bg-dark">
        <img v-if="image" :src="image" alt="bg">
        <div class="indecision-container">

            <br>
            <br>
            <input 
                type="text" 
                placeholder="Hazme una pregunta" 
                v-model="pregunta">

            <p>Hazme una pregunta con un signo de interroagción (?)</p>

            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1> {{ answer === 'yes' ? 'Si' : 'No' }} </h1>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
const pregunta = "";

export default {
    data() {
        return {
            pregunta: 'Hola Mundo',
            answer: null,
            image: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswers() {
            // Mientras no tenga respuesta pondra esta por default
            this.answer = 'pensando...'

            const { answer, image } = await fetch('https://yesno.wtf/api')
                                            .then( r => r.json() )
            this.answer = answer;
            this.image = image;
        }
    },
    watch:{
        pregunta( value, oldValue ){
            this.isValidQuestion = false;

            if( !value.includes('?')) { return }
            
            this.isValidQuestion = true;    

            // Realiza peticion http
            this.getAnswers();
            
        }
    }
}

</script>

<!-- Solo aplica en este componente scoped -->
<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>