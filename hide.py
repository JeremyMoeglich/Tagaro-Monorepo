import os
import PIL.Image
import numpy as np

rootdir = "./static"

def blacken(img):
    hsv_img = img.convert('HSV')
    hsv = np.array(hsv_img)
    hsv[..., 2] = (hsv[..., 2]*0) % 360
    new_img = PIL.Image.fromarray(hsv, 'HSV')
    return new_img.convert('RGB')

for dirpath, _, files in os.walk(rootdir):
    for subfile in files:
        if subfile[subfile.rfind("."):] not in {".png", ".jpg"}:
            continue
        img_path = os.path.join(dirpath, subfile)
        selected_image = PIL.Image.open(img_path)
        new_image = blacken(selected_image)
        new_image.save(img_path)
        

