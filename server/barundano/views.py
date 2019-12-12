import json
from datetime import time

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from barundano.models import Meal, User


@csrf_exempt
def TimeSuggestView(request):
    """
    :param request:
    POST:
    {"user":"", "meal_type":1,2,3, "food":""}
    {"user" : 이름(str)}
    {"meal_type" : 아침, 점심, 저녁(int) }
    {"food" : 음식 종류(str)}
    :return:
    { error = 0, msg = "20분" or "30분" , data={}}
    """
    if request.method == 'POST':
        req_data = json.loads(request.body)
        check_user = User.objects.filter(name=req_data['user'])
        if check_user:
            user = check_user[0]
        else:
            user = User()
            user.name = req_data['user']
            user.save()

        meal = Meal()
        meal.user = user
        meal.meal_type = req_data['meal_type']
        if req_data['food'] == 'salad':
            meal.food_type = req_data['food']
            meal.suggest_time = "00:20"
            meal.save()
            result = dict(error=0, msg=u"20", data={})
            return HttpResponse(json.dumps(result, ensure_ascii=False))
        else:
            meal.food_type = req_data['food']
            meal.suggest_time = "00:30"
            meal.save()
            result = dict(error=0, msg=u"30", data={})
            return HttpResponse(json.dumps(result, ensure_ascii=False))

    if request.method == "GET":
        meal = Meal.objects.filter().last()
        suggest_time: time = meal.suggest_time

        if suggest_time == time(hour=0, minute=30):
            result = dict(error=0, msg=u"30", data={})
        else:
            result = dict(error=0, msg=u"20", data={})

        return HttpResponse(json.dumps(result, ensure_ascii=False))

@csrf_exempt
def MealRegistView(request):
    """

    :param request:
    POST
    {"user":"", "real_meal_time":"00:00", "eat_together" : 1,2, "feeling" : 1,2,3 }
    {"user": 이름(str)}
    {"real_meal_time: "00:30" (str)}
    {"eat_together": 혼자(1), 여려명(2) (int)}
    {"feeling": 좋아요(1), 괜찮아요(2), 별루에요(3)}

    :return:
    { error = 0, msg = "식사등록완료" , data={}}
    """
    if request.method == "POST":
        req_data = json.loads(request.body)
        meal = Meal.objects.filter(user__name=req_data['user']).last()

        meal.real_meal_time = req_data["real_meal_time"]
        meal.eat_together = req_data["eat_together"]
        meal.feeling = req_data["feeling"]
        meal.save()

        result = dict(error=0, msg=u"식사 등록 완료!", data={})
        return HttpResponse(json.dumps(result, ensure_ascii=False))




