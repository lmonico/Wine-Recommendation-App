import random
from sklearn.metrics.pairwise import cosine_similarity
from scipy.spatial import distance
import csv
import numpy as np

a = [[0 for x in range(4)] for y in range(500)]
# print(a)
for i in range(500):
    a[i][0] = random.randrange(1,45)
    a[i][1] = random.randrange(1,1231)
    a[i][2] = random.randrange(1,709)
    a[i][3] = random.randrange(5,3301)

with open('./temp.csv','w') as myfile:
    wr = csv.writer(myfile)

    b = [[0 for x in range(500)] for y in range(500)]
    for i in range(500):
        for j in range(500):
            b[i][j] = 1- distance.cosine(a[i],a[j])
        wr.writerow(b[i])
        print(i)

