from flask import Flask,render_template,request,jsonify
from flask_cors import CORS
from datetime import datetime
import uuid
import random
import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://username:password@localhost/database_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


app = Flask(__name__)
CORS(app)

@app.route("/getBooks", methods=["GET"])
def get_books():
    try:
        API_KEY = "AIzaSyAwpeHyPLFMdSJKYKQ4RoIsyo716vdYxko"  # 替換為你的 API Key
        query = request.args.get("query", "Software engineer interview")  # 默認查詢關鍵字
        url = f"https://www.googleapis.com/books/v1/volumes?q={query}&maxResults=40&langRestrict=en&key={API_KEY}"

        # 發送 GET 請求到 Google Books API
        response = requests.get(url)
        response.raise_for_status()  # 如果請求失敗，拋出異常

        # 將數據返回給前端
        data = response.json()
        print(data)
        return jsonify(data.get("items", []))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.String(36), primary_key=True)  # 唯一 ID
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    authors = db.Column(db.String(255), nullable=False)
    published_date = db.Column(db.String(50), nullable=True)
    is_free = db.Column(db.String(50), nullable=False)

# 創建數據表（僅需執行一次）
with app.app_context():
    db.create_all()

@app.route("/saveBook", methods=["POST"])
def save_book():
    try:
        data = request.get_json()
        new_book = Book(
            id=str(uuid.uuid4()),  # 唯一 ID
            title=data.get('title'),
            description=data.get('description'),
            authors=data.get('authors'),
            published_date=data.get('publishedDate'),
            is_free=data.get('isfree')
        )
        db.session.add(new_book)  # 添加數據到數據庫
        db.session.commit()  # 提交事務
        return jsonify({"message": "Book saved successfully!", "book": new_book.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/")
def index():
    return render_template("index.html",terminal_output="",listing_data={})

if __name__=="__main__":
    app.run()
