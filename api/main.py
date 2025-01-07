from fastapi import FastAPI
import sys
sys.path.append("/home/max/Repos/OnlyFriends/api")
from app.database import database, metadata, engine
from app.routes import router

metadata.create_all(engine)

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

app.include_router(router, prefix="/posts", tags=["Posts"])
