import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'

import {App} from './App';


createServer({
  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({
        transactions:[
          {
            id:1,
            title:'Freelance',
            type:'deposit',
            category:'Dev',
            amount:5000,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id:2,
            title:'Food',
            type:'withdraw',
            category:'Dev',
            amount:4500,
            createdAt: new Date('2021-02-12 09:00:00')
          
          }
        ]
    })
  },
  routes(){
    this.namespace ="api";
    this.get('/transations', ()=>{
      return this.schema.all('transaction')
    })
    this.post('/transations',(schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction' , data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
 
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

