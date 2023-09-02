# nest-event-handler-crash

1. Run `npm i -D`
2. Run `npm start`
3. Go to [localhost:3000/docs](http://localhost:3000/docs)
4. Trigger `/error-directly` endpoint and see that the application handles the error.
5. Trigger `/error-through-event-handler` and see that the application crashes and cannot recover.
