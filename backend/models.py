from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

# User Table
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), unique=True)
    password = Column(String(255))
    role = Column(String(20))

# Project Table
class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200))
    description = Column(String(500))

    created_by = Column(
        Integer,
        ForeignKey("users.id")
    )

# Task Table
class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200))
    description = Column(String(500))

    status = Column(String(50))
    priority = Column(String(50))

    assigned_to = Column(
        Integer,
        ForeignKey("users.id")
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id")
    )