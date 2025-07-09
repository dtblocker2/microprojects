import time
characters = '''abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./!@#$%^&*()-_=+[]\\||{};:'"<>? '''
k = input('Enter your text: \n')

output= ''
for i in k:
    for j in characters:
        if i==j:
            output += j
            break
        time.sleep(0.01)
        print(output+j)

print(output)