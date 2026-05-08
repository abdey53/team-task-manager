from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base

from routes.users import router as user_router
from routes.projects import router as project_router
from routes.tasks import router as task_router

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(user_router)
app.include_router(project_router)
app.include_router(task_router)

@app.get("/")
def home():
    return {
        "message": "Team Task Manager API Running"
    }