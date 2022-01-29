from sendfile import sendfile


def enter(request, *args, **kwargs):
    return sendfile(request, './web/build/index.html')


def handler404(request, *args, **kwargs):
    return enter(request, *args, **kwargs)
