from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Task

router = APIRouter()

# Database connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create Task
@router.post("/tasks")
def create_task(
    task: dict,
    db: Session = Depends(get_db)
):

    new_task = Task(
        title=task["title"],
        description=task["description"],
        status=task["status"],
        priority=task["priority"],
        assigned_to=task["assigned_to"],
        project_id=task["project_id"]
    )

    db.add(new_task)
    db.commit()

    return {
        "message": "Task created successfully"
    }

# Get Tasks
@router.get("/tasks")
def get_tasks(
    db: Session = Depends(get_db)
):

    tasks = db.query(Task).all()

    return tasks