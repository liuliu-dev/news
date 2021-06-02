import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://liuliu-dev.github.io"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root(q,sources,fromdate,to):
    data=requests.get("https://newsapi.org/v2/everything?q="+q+'&'+'sources='+sources+'&'+'from='+fromdate+'&'+'to='+to+'&'+'sortBy=popularity&'+'pageSize=30&'+'sortBy=popularity',headers={"X-Api-Key":"832f76f6261645f78b4cfb6490835a6c"})
    return data.json()