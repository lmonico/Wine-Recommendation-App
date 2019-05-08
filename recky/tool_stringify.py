import random
from sklearn.metrics.pairwise import cosine_similarity
from scipy.spatial import distance
import csv
import numpy as np
import json

with open("./wines.txt", 'r') as file:
    content = file.read()
    print('here1')
a = json.loads(content)
print('here2')
# a = [[0 for x in range(4)] for y in range(500)]
# print(a)
# for i in range(500):
#     a[i][0] = random.randrange(1,45)
#     a[i][1] = random.randrange(1,1231)
#     a[i][2] = random.randrange(1,709)
#     a[i][3] = random.randrange(5,3301)
length = len(a)
print(length)
with open('./temp.json','w') as myfile:
    wr = csv.writer(myfile)
    arr = []
    print('here3')
    b = [[0 for x in range(1000)] for y in range(1000)]
    print('here34')
    for i in range(1000):
        for j in range(1000):
            b[i][j] = 1 - distance.cosine(a[i],a[j])
        #wr.writerow(b[i])
        # if(i % 10 == 0):
        arr.append(b[i])
        print(i)

    json.dump(arr, myfile)
