from django.shortcuts import render
from rest_framework import generics

from books.serializers import BookListSerializer
from books.models import Book


class BookList(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer


class BookCreate(generics.CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer


def frontend(request):
    return render(request, 'base.html')
