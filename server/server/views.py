from sendfile import sendfile


def handler404(request, *args, **kwargs):
    return sendfile(request, '/home/app/application/build/index.html')
