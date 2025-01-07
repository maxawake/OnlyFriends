from fastapi import FastAPI
from databases import Database

DATABASE_URL = "sqlite:///example.db"

app = FastAPI()
database = Database(DATABASE_URL)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/posts")
async def read_posts():
    query = "SELECT * FROM posts;"
    return await database.fetch_all(query)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
