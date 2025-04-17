## RESTful Task API

### Base URL
`http://localhost:3000/tasks`

### Endpoints

#### 1. Get all tasks
`GET /tasks`

#### 2. Get a specific task
`GET /tasks/:id`

#### 3. Create a new task
`POST /tasks`
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}
