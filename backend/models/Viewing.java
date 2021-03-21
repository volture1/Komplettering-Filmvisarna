package models;

import express.database.Model;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;

@Model
public class Viewing {

    @Id
    private String id;

    private String title;
    private String date;
    private int seat_amount;

    public Viewing() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getSeat_amount() {
        return seat_amount;
    }

    public void setSeat_amount(int seat_amount) {
        this.seat_amount = seat_amount;
    }

    @Override
    public String toString() {
        return "Viewing{" +
                "id='" + id + '\'' +
                ", movie='" + title + '\'' +
                ", date='" + date + '\'' +
                ", seat_amount='" + seat_amount + '\'' +
                '}';
    }
}