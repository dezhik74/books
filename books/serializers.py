import datetime

from rest_framework import serializers

from books.models import Book


class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('title', 'author', 'year_of_create')

    def validate_year_of_create(self, value):
        if value >= datetime.date.today():
            raise serializers.ValidationError("Дата книги неправильная")
        return value

    def validate_author(self,value):
        accepted_authors = ['Пушкин А.С.', 'Толстой Л.Н.', 'Грибоедов А.С', 'Островский А.Н.']

        if value not in accepted_authors:
            raise serializers.ValidationError("Только классика, только хардкор!")
        return value
