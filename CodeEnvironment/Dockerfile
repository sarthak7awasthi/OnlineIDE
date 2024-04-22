FROM gcc:latest


RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv


WORKDIR /CodeEnvironment


RUN python3 -m venv venv


ENV PATH="/CodeEnvironment/venv/bin:$PATH"


COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY server.py .


EXPOSE 5000


CMD ["python", "server.py"]
