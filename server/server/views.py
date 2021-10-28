from sendfile import sendfile
from django.shortcuts import redirect


def handler404(request, *args, **kwargs):
    return redirect('/')


def main_entry_point(request, *args, **kwargs):
    return sendfile(request, '/home/app/application/build/index.html')
