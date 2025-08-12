# My FastAPI App

A minimal FastAPI starter.

## Quick start

- Create venv and install deps:

```bash
python3 -m venv .venv
./.venv/bin/pip install --upgrade pip
./.venv/bin/pip install -r requirements.txt
```

- Run dev server:

```bash
./.venv/bin/uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

- Health check:

```bash
curl http://localhost:8000/health
```