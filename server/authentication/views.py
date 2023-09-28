from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.contrib.auth.hashers import check_password
from django.http.response import Http404
from django.core.mail import EmailMessage, send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_str
from rest_framework.decorators import api_view, renderer_classes
from django.contrib.auth import authenticate, login, logout
from users.models import CustomUser
from backend import settings
from . tokens import generate_token
from django.utils.html import strip_tags

# Create your views here.


@api_view(("POST",))
def signup(request):
    if request.method == "POST":
        username = request.data.get("username")
        email = request.data.get("email")
        password1 = request.data.get("pword")
        password2 = request.data.get("confirmPword")
       

        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse("Email Already Registered!!", safe=False)

        if password1 != password2:
            return JsonResponse("Passwords didn't matched!!", safe=False)
        
        myuser = CustomUser.objects.create_user(email, password1)
        myuser.username = username
        myuser.is_active = False
        myuser.save()

        # Email Address Confirmation Email
        current_site = get_current_site(request)
        email_subject = "Confirm your CSE ChatBot account!!"
        message2 = render_to_string('email_template.html',{
            'name': myuser.username,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.user_ID)),
            'token': generate_token.make_token(myuser)
        })
        email = EmailMultiAlternatives(
        email_subject,
        strip_tags(message2),
        settings.EMAIL_HOST_USER,
        [myuser.email],
        )
        email.attach_alternative(message2,'text/html')
        email.fail_silently = True
        email.send()
        return JsonResponse(
            "Your Account has been created succesfully!! Please check your email to confirm your email address in order to activate your account.",
            safe=False,
        )

def custom_authenticate(email=None, password=None):
    try:
        user = CustomUser.objects.get(email=email)
        if check_password(password, user.password):
            if user.is_active:
                return user
            return "NA"
        return None
    except CustomUser.DoesNotExist:
        return None
    
def activate(request,uidb64,token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        myuser = CustomUser.objects.get(user_ID=uid)
    except (TypeError,ValueError,OverflowError,CustomUser.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser,token):
        myuser.is_active = True
        myuser.save()
        login(request,myuser)
        return JsonResponse("Your Account has been activated!!", safe =False,)
     
    else:
        return render(request,'activation_failed.html')


@api_view(("POST",))
def signin(request):
    if request.method == "POST":
        email = request.data.get("email")
        password1 = request.data.get("password")

        user = custom_authenticate(email=email, password=password1)
        if user == 'NA':
            return Response({"error": "User account is not activated."},status=401)
        if user is not None:
            login(request, user)
            return JsonResponse(True, safe=False)
        else:
           return Response({"error": "Bad Credintials"},status=404)


@api_view(("GET",))
def signout(request):
    if request.method == "GET":
        logout(request)
        return JsonResponse("Logged Out Sucessfully!!", safe=False)