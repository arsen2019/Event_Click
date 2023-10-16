from flask import Blueprint, render_template, url_for

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('index.html')

@views.route('/events')
def events():
    return render_template('events.html')
@views.route('/about_wine')
def aboutWine():
    return render_template('about_wine.html')

@views.route('/about_events')
def aboutEvents():
    return render_template('about_events.html')

