package Example;

interface Notification{
    void send();
}
class Emailservice extends Notification{

}
class SMSService extends Notification {
}

interface payment {
    void pay()
}
class UPI implements payment{

}

class UserService{
    private notificationservice;
    public UserService(Notification){
        this.NotificationService=notificationService;
    }
    public void registerUser(string name){
        username
                notificationservice.send("welcome",+ username);
    }
}

class orderService{
    private final PaymentMethod payment;
    private final NotificationService notification;


    public OrderService(payment,notification){
        this.NotificationService=notificationService;
        this.paymentMethod=payment;

    }
    public void palce order(string name,amount){
        s.o.p("username"+username);
        paymentMethod.pay(amount);
        noticationService.send("hi"+username"order is placed")

    }
}