import json 
from scapy.all import rdpcap

packets = rdpcap("test.pcap")
data = []

# for each pkt in packets, create a packet object, store packet source, destination, protocol to that packet object
# and then append packet to data array
for pkt in packets:
    if pkt.haslayer("IP"):
        packet_info = {
            "source": pkt["IP"].src,
            "destination": pkt["IP"].dst,
            "protocol": pkt.proto
        }
        data.append(packet_info)

# open packets json file and dump packet objects into json file
with open("packets.json", "w") as f:
    json.dump(data,f, indent=2)
