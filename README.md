<img src="https://miro.medium.com/max/1400/1*XbuW8WuRrAY5pC4t-9DZAQ.jpeg">

<h1 style="text-align: center; margin-top:5%;margin-bottom:2%"> Bangla Digit Classifier Using CNN</h1>

<h3>A simple project where I had built a bangla digit
classifier using <b>Convolution Neural Network</b> with
<b>Tensorflow</b>.</h3>

<h1 style="margin-top:5%">Table of Contents :</h1>
<ul>
<li><img src="https://cdn-icons-png.flaticon.com/512/4901/4901662.png" width="2%" height="10%"><a href="#End"> <b>End to End Peoject</a></li>
<li><img src="https://cdn-icons-png.flaticon.com/512/5229/5229470.png" width="2%" height="5%"><a href="#Demo"> Project Demo</a></li>
<li><img src="https://image.shutterstock.com/image-vector/laptop-notebook-computer-icon-stack-260nw-1191888307.jpg" width="2%" height="5%"><a href="#Stack"> Tech Stack</a></li>
<li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3s_EPEJcdZnGY233ilcKKcAgIDTn1EYo7Q&usqp=CAU" width="2%" height="5%"><a href="#webapp"> WebApp Structure</a></li>
<li><img src="https://cdn-icons-png.flaticon.com/512/2192/2192434.png" width="2%" height="5%"><a href="#steps"> Project Steps</a></li>
<ul><a href ="#1">Step 1: Loading Image</a></ul>
<ul><a href ="#2">Step 2: Image Filtering</a></ul>
<ul><a href ="#3">Step 3: Convolution Neural Network Architechture</a></ul>
<ul><a href ="#4">Step 4: Save the Model</a></ul>
<ul><a href ="#5">Step 5: Read the image as base64 from the canvas(Frontend)</a></ul>
<ul><a href ="#6">Step 6: Step 6: For prediction using AJAX requests(Connection B/W frontend & backend)</a></ul>
<li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiQGZ7XGP2Jn8Vcf7fBBmqZQgsSCdkSKHPw&usqp=CAU" width="2%" height="5%"><a href="#local"> Run Locally</a></li>
<li><img src="https://thumbs.dreamstime.com/b/vector-hazard-warning-symbol-isolated-white-background-icon-sign-problem-use-web-typography-road-construction-155960097.jpg" width="2%" height="5%"><a href="#cvprb"> Facing Problem While using Opencv</a></li>
<li><img src="https://cdn.iconscout.com/icon/free/png-256/docker-13-1175230.png" width="3%" height="5%"><a href="#container"> Run Docker container from Docker Hub</a></li>
<li><img src="https://icon-library.com/images/deploy-icon/deploy-icon-8.jpg" width="3%" height="5%"><a href="#az"> Azure Deployment</a></li>
<li><img src="https://thumbs.dreamstime.com/b/vector-hazard-warning-symbol-isolated-white-background-icon-sign-problem-use-web-typography-road-construction-155960097.jpg" width="2%" height="5%"><a href="#deployprb"> Potential Error & Solution while deploying</a></li>
<li><img src="https://cdn-icons-png.flaticon.com/512/4072/4072217.png" width="2%" height="5%"><a href="#read"> Further Reading on Neural Network & CNN</a></li>
<li><img src="https://media.istockphoto.com/vectors/thankyou-gratitude-vector-id1080123202?k=20&m=1080123202&s=612x612&w=0&h=JbjTYtoIh3O2i1q4H6xVVwH0BRHeg5KowWThUQP0JNo=" width="2%" height="5%"><a href="#ack"> Acknowledgements</b></a></li>

</ul>

<h1 style="margin-top:5%"><img src="https://cdn-icons-png.flaticon.com/512/4901/4901662.png" width="4%" height="10%"><a name="End"></a> End to End Project : </h1>

- [x] Image processing/filtering
- [x] Model Building in **Tensorflow**
- [x] Model Evaluation
- [x] **API** with **Flask**
- [x] Frontend
- [x] **Dockerfile**
- [x] Deployment in **Azure**

**Live website link :**
https://bangladigitclassifier.azurewebsites.net/

<h1 style="margin-top:5%"><img src="https://cdn-icons-png.flaticon.com/512/5229/5229470.png" width="4%" height="5%"><a name="Demo"></a> Project Demo</h1>

**Pc Web browser Demo**

![bangla_digit_classifier_demo](https://user-images.githubusercontent.com/59968346/184541891-59ad87ff-9a7b-4d72-bcb4-cb073395a777.png)

**Mobile Demo**

<img src="https://user-images.githubusercontent.com/59968346/184542147-f1632e10-a77e-48d5-9c31-01e84fa268c3.jpg" alt="Typescript" width="30%%" height="50%">

<h1 style ="margin-top:5%"><img src="https://image.shutterstock.com/image-vector/laptop-notebook-computer-icon-stack-260nw-1191888307.jpg" width="4%" height="5%"><a name="stack"></a> Tech Stack</h1>

<b style="font-size:20px">Client :</b>

<p float="left">
<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="Typescript" width="50px" height="50px" style="margin-right:1%">
<img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="Typescript" width="50px" height="50px" style="margin-right:1%" >
<img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="Typescript" width="50px" height="50px" style="margin-right:1%" >
<img src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg" alt="Typescript" width="50px" height="50px" style="margin-right:1%" >
</p>
<b style="font-size:20px">Server :</b>
<p float="left">
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/python.svg" width="50px" height="50px" style="margin-right:1%" >
<img src="https://github.com/get-icon/geticon/raw/master/icons/flask.svg" width="50px" height="50px" style="margin-right:1%" >
</p>
<b style="font-size:20px">Deep Learning Framework :</b>
<p float="left">
<img src="https://avatars.githubusercontent.com/u/15658638?s=280&v=4" width="50px" height="50px" style="margin-right:1%" >
</p>
<b style="font-size:20px">Image Filtering :</b>
<p float="left">
<img src="https://avatars.githubusercontent.com/u/5009934?s=280&v=4" width="50px" height="50px" style="margin-right:1%" >
</p>
<b style="font-size:20px">Deployment :</b>
<p float="left">
<img src="https://github.com/get-icon/geticon/raw/master/icons/docker.svg" width="70px" height="50px" style="margin-right:1%" >
<img src="https://github.com/get-icon/geticon/raw/master/icons/azure.svg" width="70px" height="50px" style="margin-right:1%" >
</p>

<h1 style="margin-top:2%"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3s_EPEJcdZnGY233ilcKKcAgIDTn1EYo7Q&usqp=CAU" width="4%" height="5%"><a name="webapp"></a> WebApp Structure</h1>

![Bangla Digit Classifier App structure (1)](https://user-images.githubusercontent.com/59968346/184545357-aedb6ce5-51f1-4eaf-8213-2c3b89953a27.png)

<h1 style="margin-top:5%"><img src="https://cdn-icons-png.flaticon.com/512/2192/2192434.png" width="4%" height="5%"><a name="steps"></a> Project Steps</h1>

- <h2><a name="1"></a> Step 1: Loading Image</h2>

  - ### First unzip the image dataset. the dataset will have trainning folders and test folders. Inside those folder there will be all the images. _there will be more than one trainning and test folders_

  - ### Build a function which will get the all the trainning folders path and also all the csv files path.

    ```python
    def find_folders(path,search,csv=False):
    list_of_folders = []

    if csv==False:
        for i in os.listdir(path):
            training_folder_ptr = re.search(search,i)                     # search for pattern
            if training_folder_ptr != None:                               # if pattern matches
                if i.endswith('.csv') != True:                            # grabs only the non csv string
                    list_of_folders.append(os.path.join(path,i))          # join and create the path
    else:
        for i in os.listdir(path):
            training_folder_ptr = re.search(search,i)
            if training_folder_ptr != None:
                if i.endswith('.csv') == True:
                    list_of_folders.append(os.path.join(path,i))
    return list_of_folders
    ```

    **Output:**

    ```python
    ['/home/shoaib/Programming/Project/data/training-e',
    '/home/shoaib/Programming/Project/data/training-b',
    '/home/shoaib/Programming/Project/data/training-a',
    '/home/shoaib/Programming/Project/data/training-d',
    '/home/shoaib/Programming/Project/data/training-c']
    ```

  - Now use a python library `glob` to get all the image path from the folders.

    ```python
    def grab_all_img(list_of_folders):

    all_img_path = []
    all_img_name = []
    for i in range(len(list_of_folders)):
        img_list = glob.glob(list_of_folders[i]+'/*.png')
        all_img_path.extend(img_list)

    for i in range(len(all_img_path)):
        all_img_name.append(all_img_path[i].split(sep=os.sep)[-1])   # splitting abc/12av.png into abc,12av.png and -1 return last index value

    return all_img_path,all_img_name
    ```

  - More details of the code is in the [**notebook**](https://github.com/KillerShoaib/BanglaDigitClassifierCNN/blob/main/Bangla%20Digit%20Classifier%20with%20CNN.ipynb).

- <h2><a name="2"></a> Step 2 : Image Filtering</h2>

  - ### I have filterd the image into 4 parts.

    - #### **first resize the image into 32x32 grid**.

        <img src="https://user-images.githubusercontent.com/59968346/184551687-bdf18bd6-b0ac-417b-975e-446b86348931.png">

    - #### **Use gaussian blur to remove the noise from the image.**
        <img src="https://user-images.githubusercontent.com/59968346/184551893-7cfb16e8-8dc4-410b-9d50-5219c444ca51.png">
    - #### **Blend the original image and gaussian blured image with the addWeighted of opencv**
        <img src="https://user-images.githubusercontent.com/59968346/184552558-336e6934-3589-46f9-a7c1-402b887716ff.png">
    - #### **Finaly apply the filter with the kernel fuction**
        <img src="https://user-images.githubusercontent.com/59968346/184552784-e5ce4536-c39a-4487-9ed5-44b8256796eb.png">

  - #### **Filter fuction to implement all of thses steps**

    ```python
    def fillter_img(image_obj_list,img_size):

        img_np = []
        for i in range(len(image_obj_list)):
            img = cv.resize(image_obj_list[i].get_image(),(img_size,img_size))
            img_guass = cv.GaussianBlur(img,(9,9),10)          # will denoise it
            img_weighted = cv.addWeighted(img, 1.5, img_guass, -0.5, 0,img)  # combining the image with guassian blur
            kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]]) #filter
            img = cv.filter2D(img_weighted, -1, kernel)  # filter apply

            img = img.reshape(img_size,img_size,1).astype('float32')         # reshape the numpy array taking only one color channel

            img_np.append(img)


            # for printing
            print('processed {}/{}'.format(i+1,len(image_obj_list)),end='\r')

        img_np = np.array(img_np)
        return img_np
    ```

- <h2><a name="3"></a> Step 3: Convolution Neural Nerwork Model Architechture</h2>

    <img src="https://user-images.githubusercontent.com/59968346/184553398-113f63dc-370d-4ad0-8c21-2e599c33543d.png">

- <h2><a name="4"></a> Step 4: Save the Model</h2>

  ```python
  model.save('./base_model_bangla_digit_classification')
  ```

- <h2><a name="5"></a> Step 5: Read the image as base64 from the canvas(**Frontend**)</h2>

  - to get the base64 image from the canvas I have use `toDataUrl` function of the canvas in JavaScript.

    ```javascript
    function getURI() {
      const canvas = document.querySelector("canvas");
      const dataURI = canvas.toDataURL();
      return dataURI;
    }
    ```

  - read the image as base64 using `base64` module in python
    ```python
    encoded_data = url.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data),np.uint8)
    ```

- <h2><a name="6"></a> Step 6: For prediction using AJAX requests(Connection B/W frontend & backend)</h2>

  ```javascript
  function ajReq() {
    var xml = new XMLHttpRequest();
    xml.open("POST", "/predict", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.onload = function () {
      var dataReply = JSON.parse(this.responseText);
      document.getElementById("inputField").value = dataReply.prediction;
    };

    URI = getURI();

    dataSend = JSON.stringify({
      url: URI,
    });
    xml.send(dataSend);
  }
  ```

  Here `/predict` is sending request to **flask** server's **predict** route.

<h1 style="margin-top:5%"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiQGZ7XGP2Jn8Vcf7fBBmqZQgsSCdkSKHPw&usqp=CAU" width="3%" height="5%"><a name="local"></a> Run Locally</h1>

**Clone the project**

```bash
git clone https://github.com/KillerShoaib/BanglaDigitClassifierCNN
```

**Go to the project directory**

```bash
cd BanglaDigitClassifierCNN
```

**Create a virtual env (linux)**

```bash
source python3 -m venv venv
```

**Install dependencies**

```bash
pip install -r requirements.txt
```

**Start the server**

```bash
python3 app.py
```

<h1 style="margin-top:5%"><img src="https://thumbs.dreamstime.com/b/vector-hazard-warning-symbol-isolated-white-background-icon-sign-problem-use-web-typography-road-construction-155960097.jpg" width="3%" height="5%"><a name="cvprb"></a> Facing Problem While using opencv?</h1>

### uninstall opencv headless from the venv

```bash
pip uninstall opencv-python-headless
```

### Install opencv

```
pip install opencv-python
```

> **Note:** opencv-python does not work on cloud or docker container properly. Use opencv-python-headless to deploy it on cloud.:

<h1 style="margin-top:5%"><img src="https://cdn.iconscout.com/icon/free/png-256/docker-13-1175230.png" width="4%" height="5%"> Run <b>Docker</b><a name="container"></a> container from <b>Docker hub</b></h1>

```bash
sudo docker run killershoaib/bangla_digit_classifier
```

<h1 style="margin-top:5%"><img src="https://icon-library.com/images/deploy-icon/deploy-icon-8.jpg" width="4%" height="5%"><a name="az"></a> Azure Deployment</h1>

- Create a an azure account
- Create a resource group
- Create an app service in the portal and link the GitHub repository and save it. After that the the deployment will start
- [**Youtube VIdeo Link**](https://www.youtube.com/watch?v=qnbJcbjh-3s&t=460s&ab_channel=KrishNaik)

<h1 style="margin-top:5%"><img src="https://thumbs.dreamstime.com/b/vector-hazard-warning-symbol-isolated-white-background-icon-sign-problem-use-web-typography-road-construction-155960097.jpg" width="3%" height="5%"><a name="deployprb"></a> Potential <b>Error & Solution</b> while deploying</h1>

- **ERROR : Could not find a version that satisfies the requirement tensorflow-io-gcs-filesystem==version**

- **Solution :**
  ```bash
  pip uninstall tensorflow-io-gcs-filesystem
  ```
- **Error After Deploying :** **Importerror: libgl.so.1: cannot open shared object file: no such file or directory**
- **Solution :**

  ```bash
  pip uninstall opencv-python
  ```

  **Then :**

  ```bash
  pip install opencv-python-headless
  ```

<h1 style="margin-top:5%"><img src="https://cdn-icons-png.flaticon.com/512/4072/4072217.png" width="4%" height="5%"><a name="read"></a> Further Reading on Neural Network & CNN</h1>

- [**Machine Learning for Beginners: An Introduction to Neural Networks**](https://towardsdatascience.com/machine-learning-for-beginners-an-introduction-to-neural-networks-d49f22d238f9)

- [**Beginner’s Guide for Convolutional Neural Network (CNN / ConvNets)**](https://towardsdatascience.com/beginners-guide-for-convolutional-neural-network-cnn-convnets-5a5e725ea581)

<h1 style="margin-top:5%"><img src="https://media.istockphoto.com/vectors/thankyou-gratitude-vector-id1080123202?k=20&m=1080123202&s=612x612&w=0&h=JbjTYtoIh3O2i1q4H6xVVwH0BRHeg5KowWThUQP0JNo=" width="4%" height="5%"><a name="ack"></a> Acknowledgements</h1>

- [**Bangla Handwritten Digit Recognizer**](https://www.kaggle.com/code/shawon10/bangla-handwritten-digit-recognizer)
- [**হাতেকলমে পাইথন ডিপ লার্নিং- রকিবুল হাসান**(Bangla Book)](https://rakibul-hassan.gitbook.io/deep-learning/)
