from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)


class Meal(models.Model):
    BREAKFAST = 1
    LAUNCH = 2
    DINNER = 3

    ALONE = 1
    TOGETHER = 2

    GOOD = 1
    SOSO = 2
    BAD = 3

    MEAL_TYPE = (
        (BREAKFAST, '아침식사'),
        (LAUNCH, '점심식사'),
        (DINNER, '저녁식사'),
    )

    EAT_TOGETHER = (
        (ALONE, '혼자'),
        (TOGETHER, '함께'),
    )

    FEELING = (
        (GOOD, '좋아요'),
        (SOSO, '괜찮아요'),
        (BAD, '별로에'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meal_type = models.SmallIntegerField(choices=MEAL_TYPE, null=True, blank=True)
    suggest_time = models.TimeField(null=True, blank=True)
    real_meal_time = models.TimeField(null=True, blank=True)
    food_type = models.TextField(null=True, blank=True)
    eat_together = models.SmallIntegerField(choices=EAT_TOGETHER, null=True, blank=True)
    feeling = models.SmallIntegerField(choices=FEELING, null=True, blank=True)




