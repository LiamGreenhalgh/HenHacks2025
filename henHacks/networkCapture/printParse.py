from scapy.all import rdpcap

packets = rdpcap("capture.pcap")   # store all of the packet information into packets variable 

# for each individual packet in packet list, print out the packet source, destination, and protocol information
for pkt in packets:
    if pkt.haslayer("IP"):
        print(f"source: {pkt['IP'].src}, Destination: {pkt['IP'].dst}, Protocol: {pkt.proto}, Length: {len(pkt)}")
