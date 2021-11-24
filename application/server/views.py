from sendfile import sendfile


def handler404(request, *args, **kwargs):
    return sendfile(request, './web/build/index.html')
