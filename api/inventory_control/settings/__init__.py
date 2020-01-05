import os

from split_settings.tools import include

ENV = os.getenv('DJANGO_ENV', 'development')
DATABASE = os.getenv('DATABASE', 'sqlite')


include(
    'components/base.py',
    'components/rest_framework.py',
    f'databases/{DATABASE}.py',
    f'environments/{ENV}.py',
)
