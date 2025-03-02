import sys
import subprocess

def capture_packets(packet_count):
    interface = "Wi-Fi"  # Change this if needed
    output_file = "capture.pcap"
    
    command = ["tshark", "-i", interface, "-c", str(packet_count), "-w", output_file]
    
    try:
        print(f"Capturing {packet_count} packets on {interface} and saving to {output_file}...")
        subprocess.run(command, check=True)
        print("Capture complete!")
    except subprocess.CalledProcessError as e:
        print(f"Error capturing packets: {e}")
    except FileNotFoundError:
        print("Tshark is not installed or not found in PATH.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python capture.py <packet_count>")
        sys.exit(1)

    try:
        packet_count = int(sys.argv[1])
        if packet_count <= 0:
            raise ValueError("Packet count must be a positive integer.")
        capture_packets(packet_count)
    except ValueError as e:
        print(f"Invalid input: {e}")
        sys.exit(1)
