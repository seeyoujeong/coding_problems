a = input()
alp = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for i in alp:
    a = a.replace(i, ' ')

print(len(a))