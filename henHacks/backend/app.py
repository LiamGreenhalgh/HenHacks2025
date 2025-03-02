from fastapi import FastAPI, Query
import json
import os

app = FastAPI()

# Load packet data
def load_packets():
    file_path = "packets.json"
    
    print(f"Checking if {file_path} exists: {os.path.exists(file_path)}")  # Debugging
    if not os.path.exists(file_path):
        return {"error": "File packets.json not found"}

    try:
        with open(file_path, "r") as f:
            data = json.load(f)
            print("Loaded packets data:", data)  # Debugging
            
            # If data is in {"packets": [...] } format, extract the list
            if isinstance(data, dict) and "packets" in data:
                return data["packets"]
            return data
    except json.JSONDecodeError as e:
        return {"error": f"JSON decode error: {str(e)}"}
    except Exception as e:
        return {"error": f"Unexpected error: {str(e)}"}

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
        packets = [pkt for pkt in packets if pkt.get("protocol") == protocol]
    if source:
        packets = [pkt for pkt in packets if pkt.get("source") == source]
    if destination:
        packets = [pkt for pkt in packets if pkt.get("destination") == destination]

    return {"packets": packets}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
