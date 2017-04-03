'use strict'

class TestController {
  * index (request, response) {
    yield response.sendView('welcome')
  }
  
  * print1 (request,response) {
    const texts = request.input('texts')
    const files = request.file('files').map( (file) => { return { size: file.clientSize(), name: file.clientName() }  } )
    console.log(request.files('files'))
    yield response.sendView('output', { texts, files })
  }
  
  * print2 (request,response) {
    const texts = request.input('texts[]')
    const files = request.file('files[]').map( (file) => { return { size: file.clientSize(), name: file.clientName() }  } )
    console.log(request.files('files'))
    yield response.sendView('output', { texts, files })
  }
  
}

module.exports = TestController
