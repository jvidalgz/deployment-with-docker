'use strict'

const Queue = require('bull')

const veryImportantThingsQueue = new Queue('very_important_things', {
  redis: {
    port: 6379,
    host: process.env.QUEUE_HOST
  }
})

// Imprime todos los mensajes que ha recibido
class Receiver {
  constructor() {
    console.log('Registrando listener..')
    veryImportantThingsQueue.process(job => {
      console.log('Nuevo mensaje desde la queue con datos: ', job.data)
      return Promise.resolve({})
    })
  }
}

// Envia datos cada 1.5 segundos
class Sender {
  constructor () {
    function sendMessage(){
      const messageValue = new Date()
      console.log('Enviado mensaje...', messageValue)
      veryImportantThingsQueue.add({'key': messageValue })
    }
    setInterval(sendMessage, 1500)
  }
}

// Verificacion
if (process.argv.length < 2 ){
  throw new Error(`Uso: ${ process.env.slice(2).join(' ')} <sender | receiver>`)
}

// Comienza a recibir o enviar dependiendo del argumento en CLI
console.info('Iniciando...')
if(process.argv[2] === 'sender'){
  new Sender();
} else if (process.argv[2] === 'receiver'){
  new Receiver();
} else {
  throw new Error(`Uso: ${process.argv.slice(0,2).join(' ')} <sender | receiver>`)
}
