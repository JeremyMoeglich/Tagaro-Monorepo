import os
from typing import Iterable
import PIL.Image
import numpy as np
from copy import deepcopy
rootdir = "./src"


def is_black(img):
    hsv_img = img.convert('HSV')
    hsv = np.array(hsv_img)
    hsv2 = deepcopy(hsv)
    hsv2[..., 2] = deepcopy(hsv2[..., 2]*0)

    hsv = hsv.tolist()
    hsv2 = hsv2.tolist()

    return hsv == hsv2

chars = 0
total_files = 0

for dirpath, _, files in os.walk(rootdir):
    for subfile in files:
        #if subfile[subfile.rfind("."):] not in {".png", ".jpg"}:
        #    continue
        img_path = os.path.join(dirpath, subfile)
        #selected_image = PIL.Image.open(img_path)
        #if is_black(selected_image):
        #    print(img_path)
        total_files += 1
        chars += len(open(img_path, "r").read().split(" "))

print(chars, total_files)

    
        