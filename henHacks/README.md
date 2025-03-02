Project Title: Packet Time Machine
Project Contributors: Alex Mena, Egor Prasolov

Project Description: allows users to capture and parse real time network traffic, as well as filter, sort, and analyze traffic

Project Structure
network-analyzer/
│── backend/                # Handles API and data storage
│   ├── app.py              # FastAPI/Flask server
│   ├── process_packets.py   # Parses packets from pcap file
│   ├── requirements.txt     # Python dependencies
│   ├── packets.json         # Stores parsed packet data
│   └── sample.pcap          # Example captured traffic
│
│── frontend/               # UI for visualizing data
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js          # Main React app
│   │   ├── index.js        # React entry point
│   ├── package.json        # Frontend dependencies
│   ├── public/             # Static files
│   └── styles.css          # Styling
│
│── network-capture/        # Networking scripts 
│   ├── capture.py          # Python script to capture packets and generate pcap file
│   ├── parse.py            # Python script to extract packet data and send to json server
│   
│── README.md               # Documentation
└── .gitignore              # Ignore unnecessary files
