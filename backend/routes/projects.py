from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Project

router = APIRouter()

# Database connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create Project API
@router.post("/projects")
def create_project(
    project: dict,
    db: Session = Depends(get_db)
):

    new_project = Project(
        title=project["title"],
        description=project["description"],
        created_by=project["created_by"]
    )

    db.add(new_project)
    db.commit()

    return {
        "message": "Project created successfully"
    }

# Get All Projects
@router.get("/projects")
def get_projects(
    db: Session = Depends(get_db)
):

    projects = db.query(Project).all()

    return projects