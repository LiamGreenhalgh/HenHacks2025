from fastapi import FastAPI, Query
import json

app = FastAPI()

# Load packet data
def load_packets():
    try:
        with open("packets.json", "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"error": "No packets data found"}

@app.get("/")
def home():
    return {"message": "Welcome to the Network Analyzer API"}

@app.get("/packets")
def get_packets(
    protocol: int = Query(None, description="Filter by protocol number"),
    source: str = Query(None, description="Filter by source IP"),
    destination: str = Query(None, description="Filter by destination IP")
):
    packets = load_packets()
    
    # If error occurs in loading packets
    if "error" in packets:
        return packets

    # Apply filters if provided
    if protocol:
        packets = [pkt for pkt in packets if pkt["protocol"] == protocol]
    if source:
        packets = [pkt for pkt in packets if pkt["source"] == source]
    if destination:
        packets = [pkt for pkt in packets if pkt["destination"] == destination]

    return {"packets": packets}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
