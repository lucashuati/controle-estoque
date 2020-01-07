import os

DEBUG = False

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '*').split(',')

CORS_ORIGIN_WHITELIST = ALLOWED_HOSTS
