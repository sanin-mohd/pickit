# Generated by Django 3.2.4 on 2021-06-11 06:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20210611_0946'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=100)),
                ('country', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=30)),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('pin', models.CharField(max_length=10)),
                ('building', models.CharField(blank=True, max_length=50)),
                ('landmark', models.CharField(blank=True, max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]