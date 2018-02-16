
import smtplib
import xml.etree.ElementTree as ET
import certifi
import urllib3
import datetime

def getState():
    http = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
    r = http.request('GET', 'https://login.ohmconnect.com/verify-ohm-hour/[your code here]')
    data = r.data
    root = ET.fromstring(data)
    return root[1].text

def createLog(date, state):
    logData = date  + "_" + state
    fh = open("./logs/" + logData + ".log","w") #improve this
    fh.write(logData)
    fh.close()

def sendmail(from_email, to_email, password, state, msg):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(from_email, password)

    content = 'Subject: {}\n\n{}'.format("State changed to: " + state, msg)
    server.sendmail(from_email, to_email, content)
    server.quit()

def readLastKnownState(state_filename):
    open(state_filename, "a").close()
    fh = open(state_filename,"r")
    state = fh.read()
    fh.close()
    return state

def writeLastKnownState(state_filename, state):
    fh = open(state_filename,"w") #improve this
    fh.write(state)
    fh.close()

# Main Program
state_filename = "last_know_state.log"

# Read previous known state
previousState = readLastKnownState(state_filename)

# Get latest state from ohmconnect
timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")
state = getState() # OC_state will be True, False, or None
print "Current State: " + state
message = timestamp + " " + state

# Write last known state
writeLastKnownState(state_filename, state)

# Create log file for last known state
createLog(timestamp, state)

# Send email on state change
if previousState != state:
    print "Sending email with new state: " + state
    sendmail([email_from], [email_to], [email_password], state, message)
else:
    print "No changes on state. Not sending email."
