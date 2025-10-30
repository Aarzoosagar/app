from flask import Blueprint, jsonify, request
from backend.app import db
from backend.models import User, XPEvent
from flask import Blueprint, jsonify, request
from backend.app import db
from backend.models import User, XPEvent, UserBadge, Badge

users_bp = Blueprint('users', __name__)


@users_bp.route('/api/v1/users', methods=['POST'])
def create_user():
    data = request.get_json() or {}
    name = data.get('display_name') or data.get('name') or 'Anonymous'
    email = data.get('email')
    u = User(display_name=name, email=email)
    db.session.add(u)
    db.session.commit()
    return jsonify({'ok': True, 'user': u.to_dict()}), 201


@users_bp.route('/api/v1/users/<int:user_id>/stats', methods=['GET'])
def user_stats(user_id):
    u = db.session.get(User, user_id)
    if not u:
        return jsonify({'ok': False, 'error': 'user not found'}), 404
    events = XPEvent.query.filter_by(user_id=u.id).order_by(XPEvent.created_at.desc()).limit(10).all()
    recent = [{'id': e.id, 'amount': e.amount, 'source': e.source, 'created_at': e.created_at.isoformat()} for e in events]

    # include earned badges
    user_badges = UserBadge.query.filter_by(user_id=u.id).join(Badge, UserBadge.badge_id == Badge.id).all()
    badges = []
    # Note: join above returns UserBadge objects; fetch badge records
    for ub in UserBadge.query.filter_by(user_id=u.id).all():
        b = db.session.get(Badge, ub.badge_id)
        if b:
            badges.append({'id': b.id, 'code': b.code, 'name': b.name, 'earned_at': ub.earned_at.isoformat()})

    return jsonify({'ok': True, 'user': u.to_dict(), 'recent_events': recent, 'badges': badges})


@users_bp.route('/api/v1/users/<int:user_id>/badges', methods=['GET'])
def list_user_badges(user_id):
    u = db.session.get(User, user_id)
    if not u:
        return jsonify({'ok': False, 'error': 'user not found'}), 404
    ubs = UserBadge.query.filter_by(user_id=u.id).all()
    rows = []
    for ub in ubs:
        b = db.session.get(Badge, ub.badge_id)
        if b:
            rows.append({'id': b.id, 'code': b.code, 'name': b.name, 'description': b.description, 'earned_at': ub.earned_at.isoformat()})
    return jsonify({'ok': True, 'badges': rows})
