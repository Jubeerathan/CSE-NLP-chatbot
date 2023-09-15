from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.contrib.auth.hashers import check_password
from django.http.response import Http404
from django.core.mail import EmailMessage, send_mail
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_str
from rest_framework.decorators import api_view, renderer_classes
from django.contrib.auth import authenticate, login, logout, get_user_model
from users.models import CustomUser
from django.conf import settings
from . tokens import generate_token


# Create your views here.


@api_view(("POST",))
def signup(request):
    if request.method == "POST":
        
        first_name = request.data.get("firstName")
        last_name = request.data.get("lastName")
        email = request.data.get("email")
        password1 = request.data.get("pword")
        password2 = request.data.get("confirmPword")
        user_type = request.data.get("role")

        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse("Email Already Registered!!", safe=False)

        if password1 != password2:
            return JsonResponse("Passwords didn't matched!!", safe=False)

        myuser = CustomUser.objects.create_user(email, password1)
        myuser.first_name = first_name
        myuser.last_name = last_name
        myuser.user_type = user_type
        myuser.is_active = False
        myuser.save()
        messages.success(request, "Your Account has been created succesfully!! Please check your email to confirm your email address in order to activate your account.")
       
        # # Email Address Confirmation Email
        # current_site = get_current_site(request)
        email_subject = "Welcome CSE ChatBot Login!!"
        message = "Hello " + myuser.first_name + "!! \n" + "Welcome to CSE ChatBot!! \nThank you for visiting\n. We have also sent you a confirmation email, please confirm your email address."
        # message = render_to_string('email_confirmation.html',{
        #      'name': myuser.first_name,
        #      'domain': current_site.domain,
        #      'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
        #      'token': default_token_generator.make_token(myuser)
        #  })
        from_email = settings.EMAIL_HOST_USER
        to_list = [myuser.email]
        send_mail(email_subject, message,from_email, to_list,fail_silently=True)

         # Email Address Confirmation Email
        current_site = get_current_site(request)
        email_subject = "Confirm your Email @ CSE-Chatbot - Login!!"
        message2 = render_to_string('email_confirmation.html',{
            
            'name': myuser.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
            'token': generate_token.make_token(myuser)
        })
        email = EmailMessage(
        email_subject,
        message2,
        settings.EMAIL_HOST_USER,
        [myuser.email],
        )
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
        myuser = CustomUser.objects.get(pk=uid)
    except (TypeError,ValueError,OverflowError,CustomUser.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser,token):
        myuser.is_active = True
        myuser.save()
        login(request,myuser)
        return JsonResponse("Your Account has been activated!!", safe =False,)
     
    # else:
    #     return render(request,'activation_failed.html')


@api_view(("POST",))
def signin(request):
    print(request)
    if request.method == "POST":
        email = request.POST.get("email")
        password1 = request.POST.get("password1")

        user = custom_authenticate(email=email, password=password1)
        if user == 'NA':
            return Response({"error": "User account is not activated."},status=401)
        if user is not None:
            login(request, user)
            return JsonResponse("Logged In Sucessfully!!", safe=False)
        else:
           return Response({"error": "Bad Credintials"},status=404)


@api_view(("GET",))
def signout(request):
    if request.method == "GET":
        logout(request)
        return JsonResponse("Logged Out Sucessfully!!", safe=False)
