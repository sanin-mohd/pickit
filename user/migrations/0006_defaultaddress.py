# Generated by Django 3.2.4 on 2021-06-11 12:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_deliveryaddress'),
    ]

    operations = [
        migrations.CreateModel(
            name='DefaultAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('default_address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.deliveryaddress')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]