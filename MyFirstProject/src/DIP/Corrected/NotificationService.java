package DIP.Corrected;

public interface NotificationService {
    void send(String message);
}


//This is a simple interface that defines what any notification service should do: send() a message.
//It doesn’t care how the message is sent — that’s the job of implementing classes.