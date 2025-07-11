import time
import random

characters = '''abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./!@#$%^&*()-_=+[]\\||{};:'"<>? '''
k = 'hello world!'

output= ''
for i in k:
    while True:
        j= random.choice(characters)
        if i==j:
            output += j
            break
        time.sleep(0.003)
        print(output+j)

print(output)