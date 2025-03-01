from scapy.all import rdpcap

packets = rdpcap("test.pcap")

for pkt in packets:
    if pkt.haslayer("IP"):
        print(f"source: {pkt['IP'].src}, Destination: {pkt['IP'].dst}, Protocol: {pkt.proto}")
