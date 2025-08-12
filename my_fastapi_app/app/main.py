from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="My FastAPI App")


class HealthResponse(BaseModel):
    status: str


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok")


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "Hello, world!"}