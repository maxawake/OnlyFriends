from sqlalchemy import Table, Column, Integer, String, ForeignKey, DateTime, MetaData
from .database import metadata
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PostCreate(BaseModel):
    user_id: int
    text: str
    image_url: Optional[str] = None

class PostOut(BaseModel):
    id: int
    user_id: int
    text: str
    image_url: Optional[str] = None
    created_at: datetime

    class Config:
        orm_mode = True


posts = Table(
    "posts",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("user_id", Integer, ForeignKey("users.id")),
    Column("text", String),
    Column("image_url", String),
    Column("created_at", DateTime),
)
