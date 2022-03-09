import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        tarefas: Model
    },
    routes() {

        this.get('/api/tarefas', (schema, request) => {
            return schema.db.tarefas
        })

        this.post('/api/tarefas', (schema, resquest) => {
            const data = JSON.parse(resquest.requestBody);

            return schema.db.tarefas.insert(data);
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
