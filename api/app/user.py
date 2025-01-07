from sqlalchemy import Table, Column, Integer, String, MetaData
from .database import metadata
from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str


users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("username", String, unique=True),
    Column("password", String),
)
