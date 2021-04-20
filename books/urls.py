from django.urls import path

from books.views import BookList, BookCreate, frontend

urlpatterns = [
    path('', frontend, name='frontend_url'),
    path('list', BookList.as_view(), name='books_list_url'),
    path('create', BookCreate.as_view(), name='books_list_url'),
]