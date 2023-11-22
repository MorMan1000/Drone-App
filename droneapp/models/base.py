"""
    Using Singleton design pattern which makes sure all app requests will be sent
    to the same DroneManager instance
 """


class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(
                Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]
