import os
import io
import numpy as np

from flask import Flask, request, redirect, url_for, jsonify

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'Uploads'

from keras.preprocessing import image
from keras.applications.xception import Xception, preprocess_input, decode_predictions

# Load Xception model
# CODE HERE


def prepare_image(img):
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)
    return img


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    data = {'success': False}
    if request.method == 'POST':
        if request.files.get('file'):
            # read the file
            file = request.files['file']

            # read the filename
            filename = file.filename

            # create a path to the uploads folder
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

            file.save(filepath)

            # Load the saved image using Keras and resize it to the Xception
            # format of 299x299 pixels
            # CODE HERE

            # preprocess the image and prepare it for classification
            image = prepare_image(im)

            # find predictions
            # CODE HERE

            # indicate that the request was a success
            data['success'] = True

        return jsonify(data)

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''


if __name__ == '__main__':
    app.run(debug=True)
