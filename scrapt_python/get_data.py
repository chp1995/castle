import urllib
import urllib2

values ={}
values['page']=2
data = urllib.urlencode(values)
url = "https://www.relaischateaux.com/us/destinations/europe/france"
geturl = url + "?" + data
print geturl
request = urllib2.Request(geturl)
response = urllib2.urlopen(request)
print response.read()