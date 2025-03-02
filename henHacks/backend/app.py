from fastapi import FastAPI, Query                      # web framework for building API
from fastapi.middleware.cors import CORSMiddleware      # helps in handling cross origin requrest
import json                                             # json parsing 
import os                                               # for interacting with os (ei checking file existing)

app = FastAPI()                                         # creates our web server 

# Enable CORS so it can be used on the front end 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. Change to specific domains for security
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Load packet data
def load_packets():
    file_path = "packets.json"  # file where the packets exists

    # check if file exists, if not return error saying packets.json is not found
    print(f"Checking if {file_path} exists: {os.path.exists(file_path)}")  # Debugging
    if not os.path.exists(file_path):
        return {"error": "File packets.json not found"}

    try:
        with open(file_path, "r") as f:
            data = json.load(f)
            print("Loaded packets data:", data)                # Debugging
            if isinstance(data, dict) and "packets" in data:   # If data is in {"packets": [...] } format, extract the list
                return data["packets"]
            return data                                        # otherwise return data as is
    except json.JSONDecodeError as e:
        return {"error": f"JSON decode error: {str(e)}"}       # return error if theres a json decoing error
    except Exception as e:
        return {"error": f"Unexpected error: {str(e)}"}        # otherwise return error if there is any other exception

# home endpoint
@app.get("/")
def home():
    return {"message": "Welcome to the Network Analyzer API"}

# endpoint to display full list of packets 
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