from flask import Flask, jsonify,render_template,request
from main import img_filter,prediction



app = Flask(__name__,template_folder='Templates',static_folder='static')


@app.route('/')
def home():

    return render_template('home.html')

@app.route('/predict',methods=["POST"])
def predict():

    urlGet = request.get_json(force=True)
    url = urlGet['url']

    img = img_filter(url)
    label = prediction(img)

    pred = {'prediction':label}  
    
    pred_json = jsonify(pred)
    return pred_json


if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')

