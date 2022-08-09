import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # this is for ignoring the tf logs in the terminal
from tensorflow import keras
import numpy as np
import cv2
import base64


def img_filter(url):

    # decoding the base64 string coming from the frontend
    encoded_data = url.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data),np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)


    img = cv2.resize(img,(32,32)) # resize
    img_guass = cv2.GaussianBlur(img,(9,9),10)
    img_w = cv2.addWeighted(img,1.5,img_guass,-0.5,0,img)
    kernel = np.array([[-1,-1,-1],[-1,9,-1],[-1,-1,-1]])
    img = cv2.filter2D(img_w,-1,kernel=kernel)
    img = img.reshape(32,32,1).astype('float32')  # change it to float dtype
    img /= 255 # normalize

    return img





def prediction(img):

    # load model
    model = keras.models.load_model('./base_model_bangla_digit_classification')
    
    # prediction 
    prediction = model.predict(img.reshape(1,32,32,1))
    label = np.argmax(prediction)
    return int(label)           # converting it to int json can't recognize np obj



