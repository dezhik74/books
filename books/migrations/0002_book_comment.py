# Generated by Django 3.2 on 2021-04-20 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='comment',
            field=models.CharField(blank=True, max_length=250),
        ),
    ]
