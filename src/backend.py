import requests
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    data=requests.get("https://newsapi.org/v2/everything?q=covid",headers={"X-Api-Key":"832f76f6261645f78b4cfb6490835a6c"})
    return data.json()