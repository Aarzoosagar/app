import os
import sys
import tempfile

# ensure repo root on path when running tests directly
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import pytest
from backend.app import app, db
from backend.models import User


@pytest.fixture(scope='module')
def test_client():
    # Use an in-memory SQLite DB for tests
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['TESTING'] = True
    # initialize DB for this test instance (guard if already initialized)
    try:
        db.init_app(app)
    except RuntimeError:
        # already initialized by another test module; that's OK
        pass
    with app.app_context():
        db.create_all()
        # create a sample user
        u = User(display_name='TestUser')
        db.session.add(u)
        db.session.commit()

    with app.test_client() as client:
        yield client
