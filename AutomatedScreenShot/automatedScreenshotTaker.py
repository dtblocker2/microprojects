import pyautogui
import keyboard
import os
 
def chooseSubject():
    subjectName = int(input('Choose Subject:\n1. EE201\n2. EE203\n3. EE205\n4. GE108'))

    match subjectName:
        case 1:
            return 'EE201'
        case 2:
            return 'EE203'
        case 3:
            return 'EE205'
        case 4:
            return 'GE108'

counter = 0

def maxPhotoName(subject):
    itemsOfDirectory = os.listdir(f'C:/Users/dhruv/Desktop/2nd Year/{subject}')
    k=0
    for i in itemsOfDirectory:
        if i.endswith('.png'):
            j=''
            for m in i:
                if m in ['1','2','3','4','5','6','7','8','9','0']:
                    j+=m
            try:
                n = int(j)
                k=max(k,n)
            except ValueError:
                k=0
    return k

def takeScreenShot(subject):
    global counter
    counter += 1
    image = pyautogui.screenshot(f'C:/Users/dhruv/Desktop/2nd Year/{subject}/{counter}.png')
    print(f'screenshot taken at {subject} as {counter}.png')

subjectSelected = chooseSubject()
print(subjectSelected)

z = maxPhotoName(subjectSelected)
counter = z
print(counter)

keyboard.add_hotkey('shift+w', lambda: takeScreenShot(subjectSelected))

print("Press Shift+W to trigger the function. Press ESC to exit.")
keyboard.wait('esc')
