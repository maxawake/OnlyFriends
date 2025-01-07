from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from .database import database
from .post import posts
from .post import PostCreate, PostOut
from datetime import datetime
from typing import List
import shutil

router = APIRouter()

@router.get("/", response_model=List[PostOut])
async def get_posts():
    query = posts.select()
    return await database.fetch_all(query)

@router.post("/", response_model=PostOut)
async def create_post(post: PostCreate, image: UploadFile = File(None)):
    image_url = None

    # Handle image upload
    if image:
        with open(f"uploads/{image.filename}", "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        image_url = f"uploads/{image.filename}"

    query = posts.insert().values(
        user_id=post.user_id,
        text=post.text,
        image_url=image_url,
        created_at=datetime.utcnow(),
    )
    post_id = await database.execute(query)

    return {**post.dict(), "id": post_id, "image_url": image_url}
