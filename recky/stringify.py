import csv
import json
import pandas as pd
import codecs

# arr = []
# with open("temp.csv", 'rU', 'utf-16') as file:
#     readcsv = csv.reader(file, delimiter=',')
#     str = ''
#     for row in readcsv:
#         arr.append(row)

# print(str)



with open("temp.json", "w") as f:
    f.write(json.dumps(arr))

# with open ("temp.csv") as file:
#     str = json.load(file)
