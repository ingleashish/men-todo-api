const request = require("supertest");
const expect = require("expect");

const { app } = require("../server");
const { Todo } = require("../models/todo.model");

beforeEach((done) => {
  Todo.remove({}).then(() => done());
})

describe('Creating Todos', () => {
  it('saves a New Todo', (done) => {
    let text = 'Test Todo';

    request(app)
    .post('/api/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if(err) {
        return done(err);
      }

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    })
  });
});
