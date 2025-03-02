from scapy.all import rdpcap
import json

def parse_pcap(file_path):
    packets = rdpcap(file_path)
    data = []

    for pkt in packets:
        if pkt.haslayer("IP"):
            packet_info = {
                "source": pkt["IP"].src,
                "destination": pkt["IP"].dst,
                "protocol": pkt.proto
            }
            data.append(packet_info)

    with open("packets.json", "w") as f:
        json.dump(data, f, indent=2)

    print("✅ Packets extracted and saved to packets.json")

# Run the parser
parse_pcap("sample.pcap")
