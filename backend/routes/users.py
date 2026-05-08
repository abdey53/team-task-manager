from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import User
from auth import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter()

# Database connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Register API
@router.post("/register")
def register(user: dict, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user["email"]
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(
        user["password"]
    )

    new_user = User(
        name=user["name"],
        email=user["email"],
        password=hashed_password,
        role=user["role"]
    )

    db.add(new_user)
    db.commit()

    return {
        "message": "User registered successfully"
    }

# Login API
@router.post("/login")
def login(user: dict, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user["email"]
    ).first()

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email"
        )

    if not verify_password(
        user["password"],
        existing_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    token = create_access_token({
        "id": existing_user.id,
        "role": existing_user.role
    })

    return {
        "access_token": token,
        "user": {
            "name": existing_user.name,
            "email": existing_user.email,
            "role": existing_user.role
        }
    }