from flask import Flask, jsonify, request
import pg
app = Flask('app')

db = pg.DB(host="localhost", user="postgres", passwd="", dbname="postgres")

@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search', methods=['GET'])
def search():
    # this sends the contents of static/results.json
    results = db.query('SELECT * from website').dictresult()
    return jsonify(results)

app.run(debug=True)
