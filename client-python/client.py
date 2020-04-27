import requests

albums = requests.get('http://localhost:4200/albums')
members = requests.get('http://localhost:4200/members')
concertTours = requests.get('http://localhost:4200/concertTours')
labels = requests.get('http://localhost:4200/labels')

print(albums.text)
print(members.text)
print(concertTours.text)
print(labels.text)
