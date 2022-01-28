import string
import copy

key, wrd = 'pes', 'letadlo'
abc, matrix = list(string.ascii_lowercase), []

for i in range(len(abc)):
    matrix.append(copy.deepcopy(abc))
    abc.append(abc.pop(0))
abc.append(abc.pop(0))

for i, ltr in enumerate(wrd):
    print(matrix[abc.index(key[i % len(key)]) + 2][abc.index(wrd[i])])
