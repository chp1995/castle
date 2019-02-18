#-*- coding: UTF-8 -*-

# write to json
import json
import random
# s=[{"name":"ljd","age":10},{"name":"zl","age":20}]
# with open("details.json","w")as f:
#     json.dump(s,f)



# read from json
with open("details.json","r")as load_f:
    dict_data = json.load(load_f)
    print dict_data


# read urls from restaurants_details
# with open("restaurants_details",'r') as f:
#     while True:
#         line = f.readline()
#         if not line:
#             break
#         print line

# with open("150_hotels_name.json", "r") as f_name:
#     json_s = f_name.read()
# print json_s


# dump_dict=[]
# with open('hotels.json','r') as load_f:
#     load_dict = json.load(load_f)
#     print(load_dict)
#     for i in range(len(load_dict)):
#         test_dict={}
#         test_dict['name']=load_dict[i]['name']
#         test_dict['image'] = load_dict[i]['image']
#         test_dict['description'] = load_dict[i]['description']
#         test_dict['michelinUri'] = load_dict[i]['michelinUri']
#         test_dict['michelinStars'] = load_dict[i]['michelinStars']
#         test_dict['price'] = random.randint(20,200)
#         dump_dict.append(test_dict)
# with open('final_hotels.json',"w") as f:
#      json.dump(dump_dict,f)
#      print("加载入文件完成...")