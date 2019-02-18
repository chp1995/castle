import re
import json
import codecs
import urllib
import urllib2


hotel_name=[]
pattern = re.compile('name')
results_list = []
i = 1
with open('hotel') as f:
    line = f.readline()
    while line:
        line = f.readline()
        match = re.search(pattern, line)
        if match:
            tem_data = line.split("\"")
            # print str(i)+tem_data[1]
            print tem_data[1]
            i=i+1
            # results_list.append({'name':tem_data[1]})



ff = codecs.open(r'relaischateaux_name.json', 'w', encoding='utf-8')
json.dump(results_list, ff)
f.close()
with open("relaischateaux_name.json", "a", "utf-8") as f_name:
    json.dump(results_list, f_name)



values ={}
values['page']=2
data = urllib.urlencode(values)
url = "https://www.relaischateaux.com/us/destinations/europe/france"
geturl = url + "?" + data
print geturl
request = urllib2.Request(geturl)
response = urllib2.urlopen(request)
print response.read()



