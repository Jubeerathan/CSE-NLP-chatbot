from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [    
    path("userRole/", views.get_user_role,name="userRole"),
    path("signup/", views.signup, name="signup"),
    path("activate/<uidb64>/<token>", views.activate, name="activate"),
    path("signin/", views.signin, name="signin"),
    path("signout/", views.signout, name="signout")
]
