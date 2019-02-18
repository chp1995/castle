#-*- coding: UTF-8 -*-
import re
import requests
import json
from bs4 import BeautifulSoup

list_res_dtls_url = []
list_150_hotels_name = []

with open('restaurants_details',mode='r') as read_f:
    while True:
        line = read_f.readline()
        line = line.strip('\n')
        if line:
            list_res_dtls_url.append(line)
            # print line
        else:
            break

with open('150_hotels_name.json',mode='r') as read_f:
    while True:
        line = read_f.readline()
        line = line.strip('\n')
        if line:
            list_150_hotels_name.append(json.loads(line))
            # print line
        else:
            break

# print list_150_hotels_name[0][0]['name']
print list_res_dtls_url[0]
url = 'https://restaurant.michelin.fr/ygm9g4go/la-table-du-mas-joucas'
url = 'https://restaurant.michelin.fr/2fd19do/le-39v-paris-08'
print url

dump_dict=[]
for i in range(len(list_res_dtls_url)):
# for i in range(1):
    url=list_res_dtls_url[i]
    print url
    page = requests.get(url).text
    pagesoup = BeautifulSoup(page, 'lxml')
    all_h1 = pagesoup.find_all('h1', {"itemprop":"name"})
    all_price = pagesoup.find_all('h1', {"class":"poi_intro-display-prices"})
    all_image = pagesoup.find_all('img', {"class":"auto_image_style landscape"})
    all_description = pagesoup.find_all('h1', {"class": "field-item odd"})
    all_star = pagesoup.find_all('li', {"class": "O icon-mr icon-cercle03 opt-upper__circle-icons"})
    # print all_h1
    for i in all_h1:
        pattern = '(.*)</h1>'
        name = re.findall(pattern, str(i))
        for i in all_price:
            pattern = '(.*)</h1>'
            price = re.findall(pattern, str(i))
        for i in all_image:
            pattern = '(.*)</img>'
            image = re.findall(pattern, str(i))
        for i in all_description:
            pattern = '(.*)</h1>'
            description = re.findall(pattern, str(i))
        for i in all_star:
            pattern = '(.*)</li>'
            star = re.findall(pattern, str(i))

        # print name
        for j in range(len(list_150_hotels_name[0])):
            if list_150_hotels_name[0][j]['name'] in name:
                print list_150_hotels_name[0][j]['name']
                test_dict = {}
                test_dict['name'] = name
                test_dict['image'] = image
                test_dict['description'] = description
                test_dict['michelinUri'] = url
                test_dict['michelinStars'] = star
                dump_dict.append(test_dict)
with open('final_hotels.json', "w") as f:
    json.dump(dump_dict, f)
    print("加载入文件完成...")




# base_url = 'https://restaurant.michelin.fr/restaurants/france/page-'
# for i in range(1, 340):
#     if i ==1:
#         url = 'https://restaurant.michelin.fr/restaurants/france'
#     else:
#         url = base_url+str(i)
#     print "进度：" + str(i) +"/339"
#
#     page = requests.get(url).text
#     pagesoup=BeautifulSoup(page, 'lxml')
#     all_href = pagesoup.find_all('a', {"class":"poi-card-link"})
#     for i in all_href:
#         pattern = 'href=\"(.*)\"'
#         result = re.findall(pattern, str(i))
#         with open("restaurants_details", "a") as f:
#             f.write("https://restaurant.michelin.fr"+result[0])
#             f.write("\n")
#             print "https://restaurant.michelin.fr"+result[0]