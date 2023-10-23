from django.db import models
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.

class CustomUserManager(BaseUserManager):
    def _create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        # extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        return self._create_user(email, password, **extra_fields) 
class CustomUser(AbstractBaseUser, PermissionsMixin):
    TYPE_CHOICES = (
        ('admin', 'Admin'),
        ('undergraduate', 'Undergraduate'),
        ('postgraduate', 'Postgraduate'),
    )
    user_ID = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50,null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    account_create_date = models.DateTimeField(default=timezone.now)
    user_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='undergraduate')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    profile_pic = models.ImageField(upload_to= 'images/',null=True)
    login_times=models.IntegerField(default=0)
    about_you=models.CharField(max_length=500,null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name','user_type']

    def __str__(self):
        return self.email