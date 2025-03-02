import sys
import subprocess

def capture_packets():
    interface = "Wi-Fi"  # Change this if needed
    output_file = "contCapture.pcap"
    
    command = ["tshark", "-i", interface, "-w", output_file]
    
    try:
        print(f"Capturing packets on {interface} and saving to {output_file}... (Press Ctrl+C to stop)")
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error capturing packets: {e}")
    except FileNotFoundError:
        print("Tshark is not installed or not found in PATH.")
    except KeyboardInterrupt:
        print("\nCapture stopped by user. Exiting...")

if __name__ == "__main__":
    capture_packets()